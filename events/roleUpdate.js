const Discord = require('discord.js');

module.exports = (bot, oldRole, newRole) => {
   function toTitleCase(str) {
  return str.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())
}
let array = [];
 let object = new Discord.Permissions(newRole.permissions).serialize(false)
Object.keys(object).forEach(function (item) {
if (object[item] === false) return;  
if (item === "MANAGE_GUILD") return array.push(toTitleCase(item.replace(/_/g, " ").replace("Guild", "Server")))
if (item === "USE_VAD") return array.push(toTitleCase(item.replace(/_/g, " ").replace("VAD", "Voice Activity")))
if (item === "SEND_TTS_MESSAGES") return array.push(toTitleCase(item.replace(/_/g, " ")).replace("Tts", "TTS"))
array.push(toTitleCase(item.replace(/_/g, " ")))
});
  
  if (oldRole.name === "new role") {
    const embed = new Discord.MessageEmbed()
    .setTitle("Role Created!")
    .setDescription(`**Name** - ${newRole.name}\n**ID** - ${newRole.id}\n**Color** - ${newRole.color}`)
    .addField("Permissions", `**${array.join(", ")}**`)
    .setColor(newRole.color)
    .setFooter(`Role ID - ${newRole.id}`)
    .setTimestamp()
    bot.channels.cache.get("706686496274382958").send(embed)
  } 
}

