const Discord = require("discord.js");

function format(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / 86400)
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(days) + ' Days, ' + pad(hours) + ' Hours, ' + pad(minutes) + ' Minutes, and ' + pad(seconds) + ' Seconds';
}

exports.run = (bot, message, args) => {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;

  const embed = new Discord.MessageEmbed()
    .setTitle("Bot Information")
    .setColor("4CEF8B")
    .setThumbnail(bot.user.displayAvatarURL())
.addField("Stats for Nerds", `**CPU** - ${Math.round((process.cpuUsage().user + process.cpuUsage().system) / 1024 / 1024)}%\n**Memory Usage** - ${Math.round(used * 100) / 100} MB\n**Package Count** - ${process.versions.modules}\n**Node Version** - ${process.versions.node}`, true)
.addField("Uptime", `**${format(process.uptime())}**`)
  message.channel.send({ embed: embed });
};

exports.help = {
  name: "botinfo",
  description: "Gives the information on the bot",
  usage: "botinfo",
  category: "Utility"
};

exports.aliases = [];
