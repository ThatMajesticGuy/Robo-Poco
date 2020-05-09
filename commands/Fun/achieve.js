const Discord = require('discord.js');

exports.run = (bot, message) => {
          var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!")
  if (args.length > 24) return message.channel.send("Thats way too long! The text will fly off the screen! Please limit it to 24 characters or less!")
  let link = `minecraftskinstealer.com/achievement/${ids[randomizer]}/Achievement%20Get!/${args}`
  let url = require('encode-url-words')(link)
message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setImage(`https://${url.replace("%2520", '%20')}`))
    }


exports.help = {
    name: "achieve",
    description: "Get an achievement from minecraft",
    usage: "achieve [name]",
    category: "Fun"
};

exports.aliases = []