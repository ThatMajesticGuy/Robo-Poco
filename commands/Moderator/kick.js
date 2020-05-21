const Discord = require('discord.js');

exports.run = (bot, message) => {
  if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!"))
  
  const args = message.content.split(" ").slice(1).join(" ")
  
  let reason;
  
  const member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args.toLowerCase()) || message.guild.members.cache.find(m => m.user.id === args) || "Unknown"

  if (!member || member === "Unknown") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> Please provide the **Username**, **ID**, or **Mention of the user** you want to kick!"))
  if (!member.kickable) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> I cannot kick this user! Are they a mod/admin, or are they another bot? Are they a higher role than me? AAAAAAAAAAAAA"))
  else kick()
  
  function kick () {
    require('../../models/logs.js').find().sort({created_at: -1}).exec(function(err, post) {
    let tag;
    if (!post) tag = "1"
    else tag = Number(post.reverse()[0].num) + 1
    reason = message.content.split(" ").slice(2).join(" ")
    if (reason.length === 0) reason = "No Reason"
      
    new require('../../models/logs.js')({
    case: "Kick",
    num: tag,
    user: member.user.tag,
    id: member.user.id,
    reason: reason || `None`,
    mod: message.author.tag
  }).save().then(result => {
  console.log(result)
})
      
      const embed = new Discord.MessageEmbed()
    .setColor("#ff7f00")
    .setTitle(`Kick (Case #${tag})`)
    .setDescription(`User: **${member.user.tag}**\nID: **${member.user.id}**\nMod: **${message.author.tag}**\n\nReason: ${reason || `No Reason Provided`}`)
    .setTimestamp()
    bot.channels.cache.get("706646165189296189").send(embed)
      
  if (!member.user.bot) member.user.send(new Discord.MessageEmbed().setColor("#ff7f00").setDescription(`<:Frank:706028393275326485> You have been kicked from PocoGang for **${reason}**`)).then(() => member.kick(reason))
  else member.kick(reason)
  message.channel.send(new Discord.MessageEmbed().setColor("#ff7f00").setDescription(`<:Frank:706028393275326485> Sucessfully kicked **${member.user.username}** for **${reason}**`))
});
  };
}

exports.help = {
  name: "kick",
  description: "Kicks a user from PocoGang",
  usage: 'kick [Username, Mention, or ID]',
  category: "Moderator"
}

exports.aliases = []
