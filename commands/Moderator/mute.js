const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!"))
  
  let muteRole = message.guild.roles.cache.get("586820736124190750")
  let capo = message.guild.roles.cache.get("566636262065176588")
  
  let reason = message.content.split(" ").slice(2).join(" ")
  
  let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args[0]) || message.guild.members.cache.find(m => m.user.id === args[0]) || "Unknown"
  if (!member || member === "Unknown") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Spike:706028970117693440> You did not specify a member! Please either **Put a Username, ID or mention a user** to mute them!"))
  
  if (member.user.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Spike:706028970117693440> But I don't want to mute you b-b-baka!"))
  
  if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Spike:706028970117693440> I cannot mute **${member.user.username}**! Are they a higher role than me?`))
  
  member.roles.add(muteRole).catch(err => {
    if (err) {
      message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Spike:706028970117693440> I cannot mute **${member.user.username}**! Are they a higher role than me?`))
      console.log(err)
      } else message.channel.send(new Discord.MessageEmbed().setColor('4CEF8B').setDescription(`<:Spike:706028970117693440> Sucessfully Muted ${member.user.username}!`))
  });
  member.roles.remove(capo)
  require('../../models/logs.js').find().sort({created_at: -1}).exec(function(err, post) {
    let tag;
    if (!post) tag = "1"
    else tag = Number(post.reverse()[0].num) + 1
    new require('../../models/logs.js')({
    case: "Ban",
    num: tag,
    user: member.user.tag,
    id: member.user.id,
    reason: reason || `None`,
    mod: message.author.tag
  }).save().then(result => {
  console.log(result)
})
  const embed = new Discord.MessageEmbed()
  .setTitle(`Mute (Case ${tag})`)
  .setColor("RED")
  .setDescription(`User: **${member.user.username}#${member.user.discriminator}**\nID: **${member.user.id}**\nMod: **${message.author.tag}**\n\nReason: ${reason || "No Reason"}`)
  bot.channels.cache.get("706646165189296189").send(embed)
  message.channel.send(new Discord.MessageEmbed().setColor('4CEF8B').setDescription(`<:Spike:706028970117693440> Sucessfully Muted ${member.user.username}!`))
  });
}

exports.help = {
  name: "mute",
  description: "Mutes a user",
  usage: "mute [Username, ID, or User Mention]",
  category: "Moderator"
}

exports.aliases = []
