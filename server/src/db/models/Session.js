const { v4: uuid4 } = require('uuid')
const { mongoose } = require("../index")
const Schema = mongoose.Schema

const sessionSchema = new Schema(
  {
    sid: {
      type: String,
      required: true,
    },
    visits: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

sessionSchema.methods.generateSid = function() {
  return `session-${uuid4()}`
}

const sessionModel = mongoose.model("Session", sessionSchema)

module.exports = sessionModel
