const { v4: uuid4 } = require('uuid')
const { mongoose } = require("../index")
const Schema = mongoose.Schema

const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    questionsId: {
      type: Number,
      required: true,
    },
    playersIds: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)


const gameModel = mongoose.model("Game", gameSchema)

module.exports = gameModel
