const Discord = require('discord.js');


exports.run = (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setColor("4CEF8B")
  .setThumbnail(bot.user.displayAvatarURL())
  .setDescription("<:Poco:706022277090770985> Credits to those who were involved with Robo Poco!")
  .addField("<:Darryl:706028393094840332> Bot Owner", bot.users.cache.get("262410813254402048").tag || "ThatMajesticGuy#7530", true)
  .addField("\u200b", '\u200b', true)
  .addField("<:Spike:706028970117693440> Bot PFP Artist", bot.users.cache.get("686683055636742173").tag || "memez#3415", true)
  .addField("\u200b", "\u200b")
  .addField("<:Bo:706021689997393941> Overlookers of the Project", `${bot.users.cache.get("267797860974723073").tag || "ZeoTNT#4218"}\n${bot.users.cache.get("344421961146957826").tag || "Eric Shindeiru#7265"}`, true)
  .addField("\u200b", '\u200b', true)
  .addField(`<:Tick:706028393761734706> And you!`, "For being so awesome!", true)
  message.channel.send(embed)
}

exports.help = {
  name: "credits",
  description: "Credits those who were involved with Robo Poco!",
  usage: "credits",
  category: "Utility"
}

exports.aliases = []