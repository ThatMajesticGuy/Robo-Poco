const Discord = require('discord.js');

exports.run = (bot, message) => {
  if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!"))
  
  const args = message.content.split(" ").slice(1).join(" ")
  
  let reason;
  

  if (Number(args) && args.length === 18) {
      ban()
      return;
  } else  return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> Please provide the **ID of the user** you want to ban!"))
  
  function ban () {
    require('../../models/logs.js').findOne({id: args, case: "Ban"}, function(err, post) {
    if (post) {      
      let ogtag = post.num
      let member = post.user
      let id = post.id
      require('../../models/logs.js').deleteOne({id: args, case: "Ban"}, function(err, res) {
        const embed = new Discord.MessageEmbed()
    .setColor("4CEF8B")
    .setTitle(`Unban (See case #${ogtag})`)
    .setDescription(`User: **${member}**\nID: **${id}**\nMod: **${message.author.tag}**`)
    .setTimestamp()
    bot.channels.cache.get("706646165189296189").send(embed)
    message.guild.members.unban(post.id)
        require('../../models/toBan.js').updateOne(
   {},
   {  $pull : { toBan: args}}, function (err, outcome) {
     if (err) console.log(err)
   })
      });
  message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Frank:706028393275326485> Sucessfully Unbanned **${member}**!`))
    } else if (!post) {
      message.guild.fetchBans().then(banned => {
     if (!banned.has(args)) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> That person is not banned or it is not a valid ID!`))
        console.log(banned.get(args))
    const embed = new Discord.MessageEmbed()
    .setColor("4CEF8B")
    .setTitle(`Unban`)
    .setDescription(`User: **${banned.get(args).user.username}#${banned.get(args).user.discriminator}**\nID: **${banned.get(args).user.id}**\nMod: **${message.author.tag}**`)
    .setTimestamp()
    bot.channels.cache.get("706646165189296189").send(embed)
    message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Frank:706028393275326485> Sucessfully Unbanned **${banned.get(args).user.username}#${banned.get(args).user.discriminator}**!`))
    message.guild.members.unban(banned.get(args).user.id)
        require('../../models/toBan.js').updateOne(
   {},
   {  $pull : { toBan: args}}, function (err, outcome) {
     if (err) console.log(err)
   })
});
    }
});
  };
}

exports.help = {
  name: "unban",
  description: "Unbans a user from PocoGang",
  usage: 'unban [ID]',
  category: "Moderator"
}

exports.aliases = []