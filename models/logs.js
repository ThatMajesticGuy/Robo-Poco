const mongoose = require('mongoose')

const log = new mongoose.Schema({
  case: String,
  num: String,
  user: String,
  id: String,
  reason: String,
  mod: String
  })


module.exports = mongoose.model('Logs', log);