const Discord = require('discord.js');
const request = require('request')
const fetch = require('node-fetch')

const cooldown = new Set()

exports.run = async (bot, message, args) => {
if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  if (!args) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You did not provide a brawler name!\nUsage is `p!brawlerinfo [brawler name]`"))


if (cooldown.has(message.author.id)) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are on cooldown! Please wait **10 seconds** to run this command again!"))
  if (!cooldown.has(message.author.id)) {
    cooldown.add(message.author.id)
    setTimeout(function() {
      cooldown.delete(message.author.id)
    }, 10000)
  }
  
function sp (e) {
  return {name: e.name, string: `<:${e.name}:${e.id}>`}
}
  let SP1 = bot.guilds.cache.get("710755453407068160").emojis.cache.filter(e => Number(e.name)).map(e => sp(e))
  let SP2 = bot.guilds.cache.get("710755132241084467").emojis.cache.filter(e => Number(e.name)).map(e => sp(e))
  let gad = bot.guilds.cache.get("710771507504087070").emojis.cache.filter(e => Number(e.name)).map(e => sp(e))
  
  let starPowers = SP1.concat(SP2, gad)
                                                    
  require('node-fetch')("https://api.starlist.pro/v1/brawlers", {
method: "GET",
headers: { Authorization: process.env.STAR_KEY, 'Content-Type': 'application/json' }
}).then(async res => {
  let body = await res.json()
  if (!body || Object.keys(body).length === 0) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> Uh oh! Something went wrong. Please try again later..."))

  if (args.join(" ").toLowerCase() === "mr p") body = body.filter(b => b.name === "Mr. P")[0]
  else if (args.join(" ").toLowerCase() === "8 bit") body = body.filter(b => b.name === "8-Bit")[0]
  else body = body.filter(b => b.name.toLowerCase() === args.join(" ").toLowerCase())[0]
  if (!body || body.length === 0) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> That is not a valid brawler name! Is it a fairly new brawler, or did you misspell?"))
  
  let emoji1 = '❔'
  let emoji2 = '❔'
  let emoji3 = '❔'
  starPowers.forEach(power => {
    if (body.starPowers[0].id === Number(power.name)) emoji1 = power.string
    else if (body.starPowers[1].id === Number(power.name)) emoji2 = power.string
    else if (body.gadgets[0].id === Number(power.name)) emoji3 = power.string
  })
  const embed = new Discord.MessageEmbed()
  .setTitle(body.name)
  .setThumbnail(body.imageUrl)
  .setDescription(body.description)
  .addField("⚔️ Class", `**${body.class}**`, true)
  .addField("\u200b", "\u200b", true)
  .addField("👑 Rarity", `**${body.rarity}**`, true)
  if (body.rarity === "Trophy Road") {
    embed.addField("🔓 Unlocks at", `**${body.unlock} Trophies**`, true)
    embed.setColor("e5e5e5")
  } else if (body.rarity === "Rare") embed.setColor("00FF00")
  else if (body.rarity === "Super Rare") embed.setColor("455DFA")
  else if (body.rarity === "Epic") embed.setColor("7F00FF")
  else if (body.rarity === "Mythic") embed.setColor("FF0000")
  else if (body.rarity === "Legendary") embed.setColor("#FFFF00")
  else if (body.rarity === "Chromatic") embed.setColor("#FFA500")
  else embed.setColor("e5e5e5")
  embed.addField("Star Powers:", "----------------------------------------------------")
  embed.addField(`${emoji1} ${body.starPowers[0].name}`, `**${body.starPowers[0].description}**`)
  embed.addField(`${emoji2} ${body.starPowers[1].name}`, `**${body.starPowers[1].description}**`)
  embed.addField(`${emoji3} ${body.gadgets[0].name}`, `**${body.gadgets[0].description}**`)
  message.channel.send(embed)
}).catch(err => console.log(err))
};

exports.help = {
  name: "brawlerinfo",
  description: "Gives information on a specific brawler",
  usage: "brawlerinfo [brawler]",
  category: "Brawl Stars"
}

exports.aliases = []
