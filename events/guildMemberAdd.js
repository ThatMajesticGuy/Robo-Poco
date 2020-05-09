const Discord = require('discord.js');
const toBan = require('../models/toBan.js')


module.exports = (bot, member) => {
  toBan.findOne({}, (err, res) => {
    if (res.toBan.includes(member.user.id)) {
      const logged = new Discord.MessageEmbed().setColor("RED").setTimestamp().setDescription(`**${member.user.username}** tried to join even though they were on the Softban list. ~~Tooooo bad man!~~`)
      bot.channels.cache.get("706686496274382958").send(logged)
      member.user.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Frank:706028393275326485> You have been pre-banned from PocoGang.\n\nBelieve this is a mistake? Contact one of our moderators?`)).then(() => member.ban())
      return;
    }
  const welcome = bot.channels.cache.get("706308433095163954")
const embed = new Discord.MessageEmbed()
  .setColor("4CEF8B")
  .setThumbnail(member.user.displayAvatarURL())
  .setDescription(`Hello **${member.user.username}**! Welcome to PocoGang!\n\nBefore you can access our stage, we must verify you to make sure you are a real musician!\n\nHead to <#706306728144404620> to verify!`)
  welcome.send(`${member.user}`, embed)
  const embed2 = new Discord.MessageEmbed()
    .setColor("4CEF8B")
    .setTitle("Member Joined")
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`**User** - ${member.user.tag}`)
    .setFooter(`ID - ${member.user.id}`)
    .setTimestamp()
    bot.channels.cache.get("706686496274382958").send(embed2)
});
};