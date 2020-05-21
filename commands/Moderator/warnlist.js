const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!"))
  
  const member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args[0]) || message.guild.members.cache.find(m => m.user.id=== args[0]) || "Unknown"
  
  if (!member || member === "Unknown") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> Please provide the **Username**, **ID**, or **Mention of the user** you want to warn!"))
  require('../../models/warns.js').findOne({id: member.user.id}, (err, res) => {
    if (!res) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> That user has no warns!"))
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`**${member.user.username}**'s Warns`)
    .setFooter(`Total of ${res.warns.length} Warns`, member.user.displayAvatarURL())
    res.warns.forEach((warn, i) => {
      embed.addField(`Warn ${i + 1} by **${warn.mod}**`, warn.reason, true)
      if ([1, 4, 5, 7].includes(embed.fields.length)) return embed.addField("\u200b", "\u200b", true)
    })
    message.channel.send(embed)
  });
}

exports.help = {
  name: "warnlist",
  description: "Gives the list of warns on a specified user",
  usage: "warnlist [user]",
  category: "Moderator"
}
exports.aliases = ['infractions']
