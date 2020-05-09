const Discord = require('discord.js');

module.exports = (bot, member) => {
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Member Left")
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`**User** - ${member.user.tag}`)
    .setFooter(`ID - ${member.user.id}`)
    .setTimestamp()
    bot.channels.cache.get("706686496274382958").send(embed)
}