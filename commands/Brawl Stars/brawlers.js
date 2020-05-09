const Discord = require('discord.js');
const got = require('got')

const user = require('../../models/user.js')

const Brawlstars = require("brawlstars.js")
const token = process.env.BS_KEY
const client = new Brawlstars.Client(token)

function capsOne (str) {
  if (str === "8-BIT") return "8-Bit"
  if (str === "EL PRIMO") return "El Primo"
  if (str === "MR. P") return "Mr. P"
  let test = str.split("").slice(0, 1)
  let test2 = str.split("").slice(1, str.length).join("").toLowerCase()
  return test+test2
}

let emojis = [
  '<:Bo:706021689997393941>',
  '<:Colt:706021690391396373>',
  '<:Mortis:706021690399916133>',
  '<:Bull:706021690471219210>',
  '<:MrP:706021690551042052>',
  '<:Jessie:706021690618150933>',
  '<:El_Primo:706021690924204052>',
  '<:Rosa:707124347424211010>',
  '<:Poco:706022277090770985>',
  '<:Barley:706028391459061781>',
  '<:8Bit:706028391488553053>',
  '<:Bea:706028391924498502>',
  '<:Bibi:706028391987413074>',
  '<:Darryl:706028393094840332>',
  '<:Sprout:706028393132458025>',
  '<:Frank:706028393275326485>',
  '<:Rico:706028393308618853>',
  '<:Dynamike:706028393346367539>',
  '<:Carl:706028393426321519>',
  '<:Penny:706028393501818956>',
  '<:Piper:706028393505882133>',
  '<:Brock:706028393568665630>',
  '<:Gene:706028393568927845>',
  '<:Pam:706028393585705030>',
  '<:Nita:706028393640230912>',
  '<:Tara:706028393757540392>',
  '<:Tick:706028393761734706>',
  '<:Shelly:706028393803808798>',
  '<:Emz:706028393837232198>',
  '<:Jacky:706028393837363250>',
  '<:Max:706028393866723338>',
  '<:Leon:706028858368852060>',
  '<:Spike:706028970117693440>',
  '<:Crow:706029042884804629>',
  '<:Sandy:706029248216825906>'
]
 

exports.run = async (bot, message, args) => {
  if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  user.findOne({id: message.author.id}, async (err, res) => {
  
  let brawlers = []
  let brawler = []
  
  if (!res && !args[0]) {
  const embed3 = new Discord.MessageEmbed()
  .setDescription("<:Carl:706028393426321519> **You don't have a saved player tag!**\n\nSteps to Link Brawl Stars with Discord:\n------------------\n\n1. Go to Brawl Stars\n2. Click on your Name\n3. Copy your Player Tag (Under Profile Picture) and do **`p!sync [player id]`** to link to Discord!")
  .setColor("RED")
  .setImage("https://cdn.brawlstats.com/creatives/hashtag-guide-3frame-50percsmall.gif")
  .setFooter("Alternatively, you can do p!brawlers [tag] to see your brawlers and other people's brawlers", message.author.displayAvatarURL())
  return message.channel.send(embed3)
  return;
  }
    
    let u = message.mentions.users.first()
    let member = message.guild.members.cache.find(m => m.user.id === args[0])
    if (!u && !member) u = "abcbahwbuiew"
    else if (u && !member) u = u.id
    else if (member && !u) u = member.user.id
    user.findOne({id: u}, async (err, out) => {
      
    let func;
    if (args[0] && !args[0].startsWith("#")) args[0] = "#" + args[0]
    
    if (args[0] && !message.mentions.users.first()) func = client.getPlayer(args[0])
    else if (u !== "abcbahwbuiew") {
      if (out) func = client.getPlayer(out.tag)
      else return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Carl:706028393426321519> ${message.mentions.users.first().username || member.user.username} does not have their account synced!`))
    }
    else func = client.getPlayer(res.tag)
  func.then(player => {
    
  let color;
    if (player.nameColor) color = player.nameColor.slice(4)
    else color = "4CEF8B"
    
  message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Carl:706028393426321519> Fetching your Information...")).then(msg => {
  const embed = new Discord.MessageEmbed()
  .setTitle(`<:Carl:706028393426321519> **${player.name}**'s Brawlers`)
  .setColor(color)
  .setFooter(`Page 1/2 | ${player.brawlers.length}/35 Brawlers`, message.author.displayAvatarURL())
  
  const embed2 = new Discord.MessageEmbed()
  .setTitle(`<:Carl:706028393426321519> **${player.name}**'s Brawlers`)
  .setColor(color)
  .setFooter(`Page 2/2 | ${player.brawlers.length}/35 Brawlers`, message.author.displayAvatarURL())
  
  player.brawlers.forEach(brawler => {
    brawlers.push(brawler)
  })
  
  brawlers.sort((a, b) => b.trophies - a.trophies)
  
  brawlers.forEach(brawler => {
    let emoji = ''
    let poweremoji = ''
    emojis.forEach(e => {
      if (brawler.name === "8-BIT") emoji = "<:8Bit:706028391488553053>"
      if (brawler.name === "EL PRIMO") emoji = "<:El_Primo:706021690924204052>"
      if (brawler.name === "MR. P") emoji = "<:MrP:706021690551042052>"
      
      if (e.includes(capsOne(brawler.name))) emoji = e
      })
    
    
    
    let rankemoji = ''
    let rank = Number(brawler.rank)
    if (rank > 0 && rank < 5) rankemoji = "<:Rank_1:707018805112602625>"
    else if (rank > 4 && rank < 10) rankemoji = "<:Rank_5:707018804676264007>"
    else if (rank > 9 && rank < 15) rankemoji = "<:Rank_10:707018805062402079>"
    else if (rank > 14 && rank < 20) rankemoji = "<:Rank_15:707018804869333052>"
    else if (rank > 19 && rank < 25) rankemoji = "<:Rank_20:707018805066334279>"
    else if (rank > 24 && rank < 31) rankemoji = "<:Rank_25:707018805205008395>"
    else if (rank > 29 && rank < 35) rankemoji = "<:Rank_30:707018805054013550>"
    else rankemoji = "<:Rank_35:707018804873396275>"
    



  if (embed.fields.length >= 25) {
    embed2.addField(`${emoji} ${capsOne(brawler.name)}`, `${rankemoji} Rank - \`${brawler.rank}\`\n<:Power:707016559167668305> Power - ${brawler.power}\n<:Trophies:707016913372577812> Trophies - \`${brawler.trophies}/${brawler.highestTrophies}\``, true)
  }
    embed.addField(`${emoji} ${capsOne(brawler.name)}`, `${rankemoji} Rank - \`${brawler.rank}\`\n<:Power:707016559167668305> Power - ${brawler.power}\n<:Trophies:707016913372577812> Trophies - \`${brawler.trophies}/${brawler.highestTrophies}\``, true)
  });
  message.channel.send(embed).then(() => {
    msg.delete()
  if (embed2.fields.length > 0) message.channel.send(embed2)
  });
});
  }).catch(err => message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> Invalid User Tag!")))
    });
});
};


exports.help = {
  name: "brawlers",
  description: "Lists the brawlers you have, their trophies, power, and rank",
  usage: "brawlers <Player Tag>",
  category: "Brawl Stars"
}

exports.aliases = ['brawler']