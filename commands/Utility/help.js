const Discord = require('discord.js');
const recursive = require("recursive-readdir");

exports.run = (bot, message) => {
const args = message.content.split(" ").slice(1).join(" ")
   let fun = []
  let utility = []
  let music = []
  let mod = []
  let bs = []
  
  if (!args) {
   
recursive("./commands/", function (err, files) {

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  jsfile.forEach((f, i) => {
    let props = require(`../../${f}`);
    if (f.startsWith("commands/Fun")) fun.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Utility")) utility.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Music")) music.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Moderator")) mod.push(`\`${props.help.name}\``)
    if (f.startsWith("commands/Brawl Stars")) bs.push(`\`${props.help.name}\``)
})

  const embed = new Discord.MessageEmbed()
  .setColor("4CEF8B")
  .setDescription("<:Poco:706022277090770985> Command List\n\n**Do p!help [command name] to see more info on a command**")
  .setThumbnail(bot.user.displayAvatarURL())
  .addField("<:Barley:706028391459061781> Fun Commands", fun.join(", "))
  .addField("<:Jacky:706028393837363250> Utility Commands", utility.join(", "))
  .addField("<:Poco:706022277090770985> Music Commands", music.join(", "))
  .addField("<:Frank:706028393275326485> Moderator Commands", mod.join(", "))
  .addField("<:Carl:706028393426321519> Brawl Stars Commands", bs.join(", "))
  message.channel.send(embed)
  
  });
  } else {
    let cmd = bot.commands.get(args.toLowerCase())
    if (!cmd) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Bo:706021689997393941> That is not a valid command!"))
    if (cmd.help.category === "Administrator") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Bo:706021689997393941> That is not a valid command!"))
    
    let emoji;
    if (cmd.help.category === "Fun") emoji = '<:Barley:706028391459061781>' 
    else if (cmd.help.category === "Utility") emoji = '<:Jacky:706028393837363250>'
    else if (cmd.help.category === "Music") emoji = '<:Poco:706022277090770985>'
    else if (cmd.help.category === "Moderator") emoji = "<:Frank:706028393275326485>"
    else if (cmd.help.category === "Brawl Stars") emoji = "<:Carl:706028393426321519>"
    console.log(cmd)
    
    let aliases;
    if (cmd.aliases.length > 0) aliases = cmd.aliases.join(", ")
    else aliases = "None"
    console.log(aliases)
    const embed2 = new Discord.MessageEmbed()
    .setDescription(`${emoji} Command Info on **${cmd.help.name}**\n**[Required Arguments]**\n**<Optional Arguments>**`)
    .setColor("4CEF8B")
    .setThumbnail(bot.user.displayAvatarURL())
    .addField('\u200b', '\u200b')
    .addField("<:Darryl:706028393094840332> Category", `**${cmd.help.category}**`)
    .addField("<:Gene:706028393568927845> Description", `**${Discord.escapeMarkdown(cmd.help.description)}**`)
    .addField("<:Bibi:706028391987413074> Usage", `**p!${cmd.help.usage}**`)
    .addField("<:Sandy:706029248216825906> Aliases", `**${aliases}**`)
    message.channel.send(embed2)
  }
}

exports.help = {

  name: "help",

  description: "Lists all the available commands",

  usage: "help <command name>",
  category: "Utility"
}



exports.aliases = ["cmds", "commands"]