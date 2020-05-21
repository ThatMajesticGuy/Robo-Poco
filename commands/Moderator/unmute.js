const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!"))
  
  let muteRole = message.guild.roles.cache.get("586820736124190750")
  let capo = message.guild.roles.cache.get("566636262065176588")
  
  let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args[0]) || message.guild.members.cache.find(m => m.user.id === args[0]) || "Unknown"
  if (!member || member === "Unknown") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Spike:706028970117693440> You did not specify a member! Please either **Put a Username, ID or mention a user** to unmute them!"))
  
  member.roles.remove(muteRole).catch(err => {
    if (err) {
      message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Spike:706028970117693440> I cannot unmute **${member.user.username}**! Are they a higher role than me?`))
      console.log(err)
      } else message.channel.send(new Discord.MessageEmbed().setColor('4CEF8B').setDescription(`<:Spike:706028970117693440> Sucessfully Unuted ${member.user.username}!`))
  });
  member.roles.add(capo)
  const embed = new Discord.MessageEmbed()
  .setTitle("Unmute")
  .setColor("4CEF8B")
  .setDescription(`User: **${member.user.username}#${member.user.discriminator}**\nID: **${member.user.id}**\nMod: **${message.author.tag}**`)
  bot.channels.cache.get("706646165189296189").send(embed)
  
  message.channel.send(new Discord.MessageEmbed().setColor('4CEF8B').setDescription(`<:Spike:706028970117693440> Sucessfully Unmted ${member.user.username}!`))
  
}

exports.help = {
  name: "unmute",
  description: "Unmutes a user",
  usage: "unmute [Username, ID, or User Mention]",
  category: "Moderator"
}

exports.aliases = []
