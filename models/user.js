const mongoose = require('mongoose')

const user = new mongoose.Schema({
  id: String,
  tag: String
  })


module.exports = mongoose.model('Users', user);