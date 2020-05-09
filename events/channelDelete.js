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
    
    var embed3 = new Discord.MessageEmbed()
    .setAuthor(channel.guild.name, channel.guild.iconURL())
    .setDescription(`${type} Deleted -  **#${channel.name}**`)
    .setFooter(`ID - ${channel.id}`)
    .setColor("RED")
    .setTimestamp()
    log.send(embed3)
    
}