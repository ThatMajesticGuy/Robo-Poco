const Discord = require('discord.js');

module.exports = (bot, message) => {
  if (message.author.bot) return;
    if (message.channel.type === "dm") return;
  if (message.channel.id === "706006236906258443") return;
    const log = bot.channels.cache.get("706686496274382958")
    let content = message.content
  if (content.length > 499) {
  content = content.slice(0, 499) + "..."
  }
    var embed = new Discord.MessageEmbed()
    .setAuthor(`Deleted Message by ${message.author.username}`, message.author.displayAvatarURL())
    .setDescription(`**Message by **${message.author.toLocaleString()}** deleted in ${message.channel.toLocaleString()}**\n\n${content || "None(?)"}`)
    .setFooter(`Author ID - ${message.author.id} || Message ID - ${message.id}`)
    .setTimestamp()
    .setColor("RED")
    log.send(embed)
};