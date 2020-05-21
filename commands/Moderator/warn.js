const Discord = require('discord.js');

exports.run = (bot, message, args) => {

  if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!"))
  
  const member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args[0]) || message.guild.members.cache.find(m => m.user.id=== args[0]) || "Unknown"
  const reason = message.content.split(" ").slice(2).join(" ") || "No Reason"
  
  if (!member || member === "Unknown") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> Please provide the **Username**, **ID**, or **Mention of the user** you want to warn!"))
  if (member.roles.cache.has(message.guild.roles.cache.find(r => r.name === "Loco Poco"))) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> I cannot warn a mod!\n\n***looking at u skiper***"))
  if (member.user.bot) message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> I cannot warn a bot!\n\n***looking at u skiper***"))
  require('../../models/warns.js').findOne({id: member.user.id}, (err, res) => { 
  if (!res) {
    new require('../../models/warns.js')({
      id: member.user.id,
      warns: [{mod: message.author.tag, reason: reason}]
  }).save().then(result => {
  console.log(result)
  message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> Sucessfully warned **${member.user.username}** for the following reason:\n\n${reason}`).setFooter("This is Warn #1 for them"))
  member.user.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> You have been warned by **${message.author.username}** for the following reason:\n\n${reason}`).setFooter("This is Warn #1", member.user.displayAvatarURL()))
})
    return;
  } else if (res && res.warns.length === 1) {
    require('../../models/warns.js').updateOne({id: member.user.id}, {$push: {warns: {mod: message.author.tag, reason: reason}}}, (err, out) => {
     if (err) console.log(err)
    })
  message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> Sucessfully warned **${member.user.username}** for the following reason:\n\n${reason}`).setFooter("This is Warn #2 For them, Next is a kick"))
  member.user.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> You have been warned by **${message.author.username}** for the following reason:\n\n${reason}`).setFooter("This is Warn #2. Next warn will be a kick", member.user.displayAvatarURL()))
    return;
  } else if (res && res.warns.length === 2 || res.warns.length === 3) {
    require('../../models/warns.js').updateOne({id: member.user.id}, {$push: {warns: {mod: message.author.tag, reason: reason}}}, (err, out) => {
     if (err) console.log(err)
    })
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> Sucessfully warned **${member.user.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1} For them, They have been kicked`))
    member.user.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> You have been warned by **${message.author.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1}. You have been kicked from PocoGang`, member.user.displayAvatarURL())).then(() => member.kick(reason))
    return;
  } else if (res && res.warns.length === 4) {
    require('../../models/warns.js').updateOne({id: member.user.id}, {$push: {warns: {mod: message.author.tag, reason: reason, mutedTill: new Date(new Date(Date.now()).getTime() + 60 * 60 * 24 * 1000)}}}, (err, out) => {
     if (err) console.log(err)
    })
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> Sucessfully warned **${member.user.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1} For them, They have been muted for 24 hours`))
    member.user.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> You have been warned by **${message.author.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1}. You have been muted from PocoGang for 24 hours`, member.user.displayAvatarURL()))
    member.roles.add("586820736124190750")
  } else if (res && res.warns.length === 5) {
    require('../../models/warns.js').updateOne({id: member.user.id}, {$push: {warns: {mod: message.author.tag, reason: reason, mutedTill: new Date(new Date().setHours(new Date().getHours() + 48))}}}, (err, out) => {
     if (err) console.log(err)
    })
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> Sucessfully warned **${member.user.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1} For them, They have been muted for 48 hours`))
    member.user.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> You have been warned by **${message.author.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1}. You have been muted from PocoGang for 48 hours`, member.user.displayAvatarURL()))
    member.roles.add("586820736124190750")
  } else if (res && res.warns.length >= 6) {
    require('../../models/warns.js').updateOne({id: member.user.id}, {$push: {warns: {mod: message.author.tag, reason: reason, bannedTill: new Date(new Date().setHours(new Date().getHours() + 72))}}}, (err, out) => {
     if (err) console.log(err)
    })
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> Sucessfully warned **${member.user.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1} For them, They have been banned for 72 hours`))
    member.user.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> You have been warned by **${message.author.username}** for the following reason:\n\n${reason}`).setFooter(`This is Warn #${res.warns.length + 1}. You have been banned from PocoGang for 72 hours`, member.user.displayAvatarURL())).then(() => member.ban(reason))
  }
})
};

exports.help = {
  name: 'warn',
  description: "Warns a user if they are breaking a rule",
  usage: "warn [user] <reason>",
  category: "Moderator"
}

exports.aliases = []
