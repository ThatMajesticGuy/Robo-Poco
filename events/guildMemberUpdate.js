const Discord = require('discord.js');

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
}

let ignoreRoles = [
  '706245796278042634', '706245786362576916',
  '706245784680529931', '706245794231222365',
  '706245789449715804', '706245790368137338',
  '706245792817610832', '706245787482324992',
  '706245787922989137', '706245783619633224',
  '706245790611406972', '706245795921395794',
  '706245791525896272', '706245791773360138',
  '706245791811108866', '706245786798653480',
  '706251775253938217', '706245787184791592',
  '706245785351880810', '706245788761587733',
  '706245792171556986', '706245789709631509',
  '706245794927345794', '706245789403316254',
  '706245788279504907', '706245785448218626',
  '706245785913655397', '706245787780251730',
  '706245785544818708', '706245784106041385',
  '706245791148408852', '706245795409559572',
  '706245794256388198', '706245795514417203',
  '706245787889303643', '706245795157901312',
  '706245783305060455', '706245788493283359',
  '706245792108773547', '706245790171136062',
  '706245782742761515'
]

module.exports = (bot, oldMember, newMember) => {
  
  if (oldMember.roles.cache !== newMember.roles.cache) {
    if (newMember.roles.cache.array().diff(oldMember.roles.cache.array()).length > 0) {
      if (ignoreRoles.includes(newMember.roles.cache.array().diff(oldMember.roles.cache.array())[0].id)) return;
    const embed = new Discord.MessageEmbed()
    .setAuthor(oldMember.user.tag, oldMember.user.displayAvatarURL())
    .setDescription(`${oldMember.user.toLocaleString()} **was added to the role** ${newMember.roles.cache.array().diff(oldMember.roles.cache.array())[0]}`)
    .setColor("4CEF8B")
    .setTimestamp()
    bot.channels.cache.get("706686496274382958").send(embed)
      return;
    }
    if (oldMember.roles.cache.array().diff(newMember.roles.cache.array()).length > 0) {
      if (ignoreRoles.includes(oldMember.roles.cache.array().diff(newMember.roles.cache.array()[0].id))) return;
      const embed = new Discord.MessageEmbed()
    .setAuthor(oldMember.user.tag, oldMember.user.displayAvatarURL())
    .setDescription(`${oldMember.user.toLocaleString()} **was removed from the role** ${oldMember.roles.cache.array().diff(newMember.roles.cache.array())[0]}`)
    .setColor("RED")
    .setTimestamp()
    bot.channels.cache.get("706686496274382958").send(embed)
      return;
    }
  }
}