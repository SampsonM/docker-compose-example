const mongoose = require('mongoose')
const Schema = mongoose.Schema

const URLSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  URL: {
    type: String,
    rrquired: true,
    unique: true
  }
})

module.exports = mongoose.model('urls', URLSchema)
