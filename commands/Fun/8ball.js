const Discord = require('discord.js');

var answers =
    [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, Yes",
        "Most likely",
        "Outlook seems good",
        "Yeah whatever keeps you smiling",
        "Signs are pointing to yes",
        "Reply is hazy, try again",
        "Ask me again later",
        "It's better not to tell you now",
        "I cannot predict right now",
        "Concentrate and ask me again",
        "Don't count on it",
        "Don't put your hopes on it",
        "My reply is No",
        "My sources are telling me no",
        "Outlook doesn't seem so good",
        "It's very doubtful"
    ]

exports.run = (bot, message) => {
  const args = message.content.split(" ").slice(1).join(" ");
  if (!args) {
      const embed = new Discord.MessageEmbed()
      .setDescription(`What is the question of which you seek the answer?`)
      .setColor("4CEF8B")
      message.channel.send({embed: embed})
      return;
  }
  const answer = new Discord.MessageEmbed()
  .setDescription(`:8ball: **||** ${answers[Math.floor(Math.random() * answers.length)]}`)
  .setColor("4CEF8B")
  message.channel.send({embed: answer})
}

exports.help = {
  name: "8ball",
  description: "Tells you an answer to your question",
  usage: "8ball [question]",
  category: "Fun"
}

exports.aliases = []
