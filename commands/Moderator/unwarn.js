const Discord = require('discord.js');

exports.run = (bot, message, args) =>  {
  if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!"))
  const member = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username === args[0]) || message.guild.members.cache.find(m => m.user.id === args[0].toLowerCase()) || "Unknown"
  
  if (!member || member === "Unknown") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> Please provide the **Username**, **ID**, or **Mention of the user** you want to warn!"))
  if (!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> You did not specify which warning to remove"))
  if (!parseInt(args[1])) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> That warning number is not a valid number!"))
  require('../../models/warns.js').findOne({id: member.user.id}, (err, res) => { 
    if (!res) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> That user has no warns!"))
    if (parseInt(args[1]) > res.warns.length) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> That number is more than their warns!"))
    

    let reason = res.warns[parseInt(args[1]) - 1]
    if (reason) reason = res.warns[parseInt(args[1]) - 1].reason
    if (!reason) reason = "Unknown Reason"
    
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Are you sure you want to remove this warning?\n\nWarning #${args[1]}: ${reason}`)).then(msg => {
      msg.react("👍").then(() => msg.react("👎"))
      const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

const collector = msg.createReactionCollector(filter, { time: 30000 });

collector.on('collect', (reaction, user) => {
  if (reaction.emoji.name === "👎")  {
    msg.delete()
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> Cancelled the Unwarn"))
    collector.stop()
  }
  if (reaction.emoji.name === "👍") {
    collector.stop()
    message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Frank:706028393275326485> Sucessfully removed the warn!"))
    if (res.warns.length === 1) {
      require('../../models/warns.js').deleteOne({id: member.user.id}, (err, out) => {
     if (err) console.log(err)
    })
    } else {
      require('../../models/warns.js').updateOne({id: member.user.id}, {$pull: {warns: res.warns[parseInt(args[1]) - 1]}}, (err, out) => {
     if (err) console.log(err)
    })
    }
  }
});
  collector.on('end', collected => {
	if (collected.size === 0) {
    msg.delete()
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> **You did not respond in time. Cancelled the command**"))
    return;
  }
});
    })
  });
}

exports.help = {
  name: 'unwarn',
  description: "Removes a warn from a user",
  usage: "unwarn [user] [warn #]",
  category: "Moderator"
}
exports.aliases = []
