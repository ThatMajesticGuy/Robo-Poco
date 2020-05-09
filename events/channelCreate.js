const Discord = require('discord.js')

const markdownEscape = function(text) {
   return text.replace(/((\_|\*|\~|\`|\|){2})/g, '\\$1');
};

module.exports = (bot, channel) => {
  let type;
    if (channel.type === "text") type = "Text Channel"
    else if (channel.type === "voice") type = "Voice Channel"
    else type = "Category"
    let nsfw;
    if (channel.nsfw === false) nsfw = "No"
    if (channel.nsfw === true) nsfw = "Yes"

  if (channel.type === "dm") return;
    const log = bot.channels.cache.get("706686496274382958")
    if (!log) return;
    let info;
    let typed;
    if (channel.type === "text") {
      info = `\n**NSFW** - ${nsfw}`
      typed = "New Text Channel Created!"
      }
    if (channel.type === "voice") {
      info = `\n**User Limit** - ${channel.userLimit}\n**Bitrate** - ${channel.bitrate}`
      typed = "New Voice Channel Created!"
    }
    if (channel.type === "category") {
      info = ``
      typed = "New Category Created!"
    }
    
    var embed3 = new Discord.MessageEmbed()
    .setAuthor(channel.guild.name, channel.guild.iconURL())
    .setDescription(`New ${type} Created! -  **#${channel.name}** (${channel.toLocaleString()})${info}`)
    .setFooter(`ID - ${channel.id} | Channel Position - ${channel.position+1}`)
    .setColor("#4CEF8B")
    .setTimestamp()
    log.send(embed3)
    
}