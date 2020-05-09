const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  const user = message.mentions.users.first();

  var embed2 = new Discord.MessageEmbed()
    .setDescription(`[Avatar Link](${message.author.displayAvatarURL()})`)
    .setColor("4CEF8B")
    .setImage(`${message.author.displayAvatarURL()}`)
  .setFooter(`Ran by ${message.author.username}`, message.author.displayAvatarURL())
    .setTimestamp()
  if (!user) return message.channel.send(embed2);

  var embed = new Discord.MessageEmbed()
    .setDescription(`[Avatar Link](${user.displayAvatarURL()})`)
    .setColor("4CEF8B")
    .setImage(`${user.displayAvatarURL()}`)
  .setFooter(`Ran by ${message.author.username}`, message.author.displayAvatarURL())
    .setTimestamp()
  if (user) return message.channel.send(embed);
};

exports.help = {
  name: "avatar",
  description: "Lets you get yours or someone else's avatar",
  usage: "avatar <user>",
  category: "Utility"
};

exports.aliases = ["pfp"];
