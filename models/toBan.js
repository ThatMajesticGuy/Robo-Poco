const mongoose = require('mongoose')

const log = new mongoose.Schema({
  toBan: Array
  })


module.exports = mongoose.model('To Ban', log);