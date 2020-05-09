const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  message.channel.send("Pinging... sec").then(msg => {
    var embed = new Discord.MessageEmbed()
      .setTitle("Pong! :ping_pong:")
      .setFooter(`Ran by ${message.author.username}`, message.author.displayAvatarURL())
      .setColor("4CEF8B")
      .setThumbnail(message.author.displayAvatarURL())
      .addField(
        "Latency Ping",
        msg.createdTimestamp - message.createdTimestamp + "ms"
      )
      .addField("API Ping", Math.round(bot.ws.ping) + "ms");
    message.channel.send(embed)
    msg.delete()
  });
};

exports.help = {
  name: "ping",
  description: "Gets your ping!",
  usage: "ping",
  category: "Utility"
};

exports.aliases = [];
