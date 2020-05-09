
require('dotenv').config()
const mongoose = require('mongoose')


module.exports = (bot, ready) => {
  process.stdout.write(`Ready for launch! Partying with ${bot.guilds.cache.size} servers!\n`)
  bot.user.setActivity(`Playing Music with ${bot.users.cache.size} people!`) 
  mongoose.connect(process.env.CON_STR, {useNewUrlParser: true, useUnifiedTopology: true});
  const channel = [bot.channels.cache.get("706306728144404620"), bot.channels.cache.get("706253846048931959")]
  
  channel.forEach(c => c.messages.fetch({limit: 10}))
}