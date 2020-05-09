const Discord = require('discord.js');
const request = require("request");
const randomCat = require('random.cat.js');
const randomCatApi = randomCat.api();

exports.run = async (bot, message, args) => {
 
randomCatApi.getCat().then(cat => {
  var embed = new Discord.MessageEmbed()
  .setColor("4CEF8B")
  .setImage(cat.file)
  .setFooter(`Ran by ${message.author.username}`, message.author.displayAvatarURL())
 message.channel.send({ embed: embed })
});
};

exports.help = {
    name: "cat",
    description: "Sends a picture of a cat!",
    usage: "cat",
    category: "Fun"
}

exports.aliases = []
