const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = async (bot, message, args) => {
    randomPuppy()
    .then(url => {
        if (url.includes(".jpg" || ".png" || ".svg")) {
             var embed = new Discord.MessageEmbed()
               .setURL(url)
               .setColor("4CEF8B")
               .setImage(url)
               .setFooter(`Ran by ${message.author.username}`, message.author.displayAvatarURL())
              message.channel.send({ embed: embed })
             return;
        } else {
            return message.channel.send("Not the correct format came through. So I couldn't send you a picture of a dog");
        }

})};

exports.help = {
    name: "dog",
    description: "Get a random dog picture!",
    usage: "dog",
    category: "Fun"
};

exports.aliases = []
