const Discord = require('discord.js')

module.exports = (bot, role) => {

const log = bot.channels.cache.get("706686496274382958")
      if (!log) return;
      const embed = new Discord.MessageEmbed()
      .setTitle("Role Deleted")
      .setTimestamp()
      .setDescription(`**Role Name** - ${role.name}\n**Role ID** - ${role.id}\n**Role Color** - ${role.color}`)
      .setColor(role.color)
      .setFooter(`Role ID - ${role.id}`)
      log.send(embed)
}