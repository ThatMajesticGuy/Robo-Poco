const Discord = require('discord.js');
const cooldown = new Set()
exports.run = (bot, message) => {
  if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  const args = message.content.split(" ").slice(1).join(" ")
  if (!args) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("You did not provide any map name!\n\nCorrect Usage: `p!map Pinball Dreams`"))
  
  if (cooldown.has(message.author.id)) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are on cooldown! Please wait **10 seconds** to run this command again!"))
  if (!cooldown.has(message.author.id)) {
    cooldown.add(message.author.id)
    setTimeout(function() {
      cooldown.delete(message.author.id)
    }, 10000)
  }
  require('node-fetch')("https://api.starlist.pro/v1/maps", {
method: "GET",
headers: { Authorization: process.env.STAR_KEY, 'Content-Type': 'application/json' }
}).then(async res => {
  const body = await res.json()
  
  if (!body || Object.keys(body).length === 0) return message.channel.send("test")
  

    function lowerCase (str) {
      if (typeof str !== "string") return;
      return str.toLowerCase()
    }
  let map = body.filter(m => lowerCase(m.name) === args.toLowerCase())
  if (map.length === 0) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("That is not a valid map name..."))

  map = map[0]
    let credit = map.credit
    if (credit === null) map.credit = "Supercell"
    
    let emoji = '<:Clipboard:710942296639668296>'
    if (map.gameMode.name === "Gem Grab") emoji = "<:Gem_Grab:707489355857657906>"
    else if (map.gameMode.name === "Showdown" || map.gameMode.name === "Solo Showdown" || map.gameMode.name === "Duo Showdown") emoji = "<:Solo:707060594393612319>"
    else if (map.gameMode.name === "Brawl Ball") emoji = "<:Brawl_Ball:707489332730134580>"
    else if (map.gameMode.name === "Bounty") emoji = "<:Bounty:707489449667461171>"
    else if (map.gameMode.name === "Heist") emoji = "<:Heist:709097309698523166>"
    else if (map.gameMode.name === "Siege") emoji = "<:Siege:707489394042601472>"
    else if (map.gameMode.name === "Hot Zone") emoji = "<:HotZone:710941988010197042>"
    else if (map.gameMode.name === "Present Plunder") emoji = "<:PresentPlunder:711017396718272605>"
    
    let disabled = "This map is not disabled from rotation"
    if (map.disabled === true) disabled = "This map is disabled from rotation"
  message.channel.send(new Discord.MessageEmbed().setColor("455DFA").setTitle(`${emoji} ${map.name}`).addField("⚒️ Made by", `**${map.credit}**`, true).addField("🌎 Environment", `**${map.environment.name}**`, true).setImage(map.imageUrl).setFooter(disabled))
}).catch(error => {
    if (error.name === 'AbortError') {
    return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> Uh oh! Something went wrong. Please try again later..."))
  }
  });
}


exports.help = {
  name: "map",
  description: "Gives you information on a certain map",
  usage: "map [map name]",
  category: "Brawl Stars"
}
exports.aliases = ['mapinfo']
