const Discord = require('discord.js');

exports.run = (bot, message) =>{
  const args = message.content.split(" ").slice(1).join(" ")
  if (!args) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Gale:710573729113178193> Please provide what the issue is"))
  message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Gale:710573729113178193> Sent the issue sucessfully!"))
  bot.channels.cache.get("712742596828594296").send(new Discord.MessageEmbed().setColor("455DFA").setAuthor("New Issue Found", "https://cdn.discordapp.com/emojis/710573729113178193.png?v=1").setDescription(args).setFooter(`Sent by ${message.author.tag}`, message.author.displayAvatarURL()))
}

exports.help = {
  name: "issue",
  description: "Lets you report an issue, wether it be from the bot or the server",
  usage: "issue [issue]",
  category: "Important"
}

exports.aliases = []
