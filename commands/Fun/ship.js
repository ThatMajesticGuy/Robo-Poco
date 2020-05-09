const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  const user = message.mentions.users.first();
  var splitter = message.content.split("").slice(7).join("").split(" | ")

  if (!splitter || splitter.length === 1) return message.channel.send("Please seperate the people's names with `|`\n\nExample: `p!ship You | Me`")
  var name1 = splitter[0]
  var name2 = splitter[1]
  if (!name1) return message.channel.send("Who is the first person?")
  if (name1.startsWith("<@")) name1 = message.mentions.users.first().username
  if (name1 === undefined) return message.channel.send("**The First Name** is not a valid user mention!")
  if (!name2) return message.channel.send(`Who do you want to ship **${name1}** with?`)
  if (name2.startsWith("<@")) name2 = message.mentions.users.get(name2.split("").splice(3, 19).slice(0, 18).join("")).username
  if (name2 === undefined) return message.channel.send("**The Second Name** is not a valid user mention!")
  console.log(name2)
  var req = require('unirest')("GET", "https://love-calculator.p.rapidapi.com/getPercentage");

req.query({
	"fname": name1,
	"sname": name2
});

req.headers({
	"x-rapidapi-host": "love-calculator.p.rapidapi.com",
	"x-rapidapi-key": process.env.RAPIDAPI_KEY
});


req.end(function (result) {
var embed = new Discord.MessageEmbed()
.setTitle("Result Calculated!")
.setColor("RED")
.setTimestamp()
.addField("Couple", `**${name1}** and **${name2}**`, true)
.addField("\u200b", "\u200b", true)
.addField("Percentage", `**${result.body.percentage}%**`, true)
.addField("Ship Name", `**${name1.slice(0, 4) + name2.slice(0, 4)}**`, true)
.addField("\u200b", "\u200b", true)
.addField("Result", `**${result.body.result}**`, true)
message.channel.send({ embed: embed })

});
};

exports.help = {
  name: "ship",
  description: "Ships two people",
  usage: "ship [Person 1] | [Person 2]",
  category: "Fun"
}

exports.aliases = []