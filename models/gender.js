const mongoose = require('mongoose')

const genderSchema = new mongoose.Schema({
  name: String,
  description: String,
})

module.exports = mongoose.model('Gender', genderSchema)