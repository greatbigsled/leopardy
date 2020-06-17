const crypto = require('crypto')
const config = require('config')
const { mongoose } = require("../index")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sid: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.virtual("password").set(function (password) {
  if (password !== undefined) {
    if (password.length < 5) {
      this.invalidate('password', 'Password must be > 5 symbols')
    }
  }

  this._plainPassword = password

  if (password) {
    this.salt = crypto.randomBytes(config.crypto.hash.length).toString('base64')
    this.passwordHash = crypto.pbkdf2Sync(
      password,
      this.salt,
      config.crypto.hash.iterations,
      config.crypto.hash.length,
      'sha1'
    ).toString('base64')
  } else {
    this.salt = undefined
    this.passwordHash = undefined
  }
}).get(function() {
  return this._plainPassword
})

userSchema.method.checkPassword = function(password) {
  if (!password) {
    return false
  }
  if (!this.passwordHash) {
    return false
  }

  const incomingPasswordHash = crypto.pbkdf2Sync(
      password,
      this.salt,
      config.crypto.hash.iterations,
      config.crypto.hash.length,
      'sha256'
    ).toString('base64')

  return incomingPasswordHash === this.passwordHash
}

userSchema.methods.getPublicData = function() {
  return {
    name: this.name,
  }
}

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel
