const Discord = require('discord.js');

module.exports = (bot, oldMessage, newMessage) => {
  if (oldMessage.content === newMessage.content) return;
  if (oldMessage.channel.type === "dm") return;
  let oldContent = oldMessage.content
  if (oldContent.length > 251) {
    oldContent = oldContent.slice(0, 251) + "..."
  }
  
  let newContent = newMessage.content
  if (newContent.length > 251) {
  newContent = newContent.slice(0, 251) + "..."
  }
  
    if (oldMessage.author.bot) return;
    const log = bot.channels.cache.get("706686496274382958") 
    if (!log) return;
    var embed = new Discord.MessageEmbed()
    .setAuthor(`Edited by ${newMessage.author.tag}`, newMessage.author.displayAvatarURL())
    .setDescription(`[Jump to Message](https://discordapp.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id})`)
    .setColor("#4CEF8B")
    .setFooter(`Message ID - ${newMessage.id}`)
    .addField("Message Author", newMessage.author.tag, true)
    .addField("\u200b", "\u200b", true)
    .addField("Channel Sent In", newMessage.channel.toLocaleString(), true)
    .addField("Old Message", oldContent)
    .addField("New Message", newContent)
    log.send(embed)
};