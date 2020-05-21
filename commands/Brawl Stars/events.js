const Discord = require('discord.js');
const request = require('request')
const dateformat = require('dateformat')
const cooldown = new Set()

exports.run = (bot, message, args) => {
  if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  
if (cooldown.has(message.author.id)) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are on cooldown! Please wait **10 seconds** to run this command again!"))
  if (!cooldown.has(message.author.id)) {
    cooldown.add(message.author.id)
    setTimeout(function() {
      cooldown.delete(message.author.id)
    }, 10000)
  }
require('node-fetch')("https://api.starlist.pro/v1/events", {
method: "GET",
headers: { Authorization: process.env.STAR_KEY, 'Content-Type': 'application/json' }
}).then(async res => {
  const bod = await res.json()
  
  let func
  let num = 0
  let str = ''
 if(!args[0] || args[0].toLowerCase() === "current" || args[0].toLowerCase() !== "upcoming" || args[0].toLowerCase() !== "later") {
   func = bod.current
   str = "Current Events"
 }
 else if (args[0].toLowerCase() === "upcoming" || args[0].toLowerCase() === "later") {
   func = bod.upcoming
   str = "Upcoming Events"
 }
  
  const embed = new Discord.MessageEmbed()
  .setTitle(str)
  .setColor("4CEF8B")
   func.forEach(event => {
     if (event.gameMode === "Gem Grab" && event.slotName !== "Power Play") {
       embed.addField("<:Gem_Grab:707489355857657906> Gem Grab", `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\``, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
    else  if (event.gameMode === "Showdown" && event.slotName !== "Power Play") {
       let modifier = "No Modifier"
       let emoji = '<:OhNo:709095369463562271>'
       if (event.hasModifier === true) modifier = event.modifierName
       if (modifier !== "No Modifier") {
         if (event.modifierName === "Energy Drink") emoji = '<:EnergyDrink:709094651147059310>'
         else if (event.modifierName === "Meteor Shower") emoji = '<:MeteorShower:709094650899857449>'
         else if (event.modifierName === "Healing Mushrooms") emoji = '<:HealingMushrooms:709094650874560564>'
         else if (event.modifierName === "Angry Robo") emoji = "<:AngryRobo:709101566107582605>"
       }
       embed.addField("<:Solo:707060594393612319> Showdown", `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\`\n${emoji} Modifier - \`${modifier}\``, true)
      if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
     else if (event.gameMode === "Brawl Ball" && event.slotName !== "Power Play") {
       embed.addField("<:Brawl_Ball:707489332730134580> Brawl Ball", `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\``, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
     else if (event.gameMode === "Bounty" && event.slotName !== "Power Play") {
       embed.addField("<:Bounty:707489449667461171> Bounty", `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\``, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
     else if (event.gameMode === "Heist" && event.slotName !== "Power Play") {
       embed.addField("<:Heist:709097309698523166> Heist", `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\``, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
     else if (event.gameMode === "Siege" && event.slotName !== "Power Play") {
       embed.addField("<:Siege:707489394042601472> Siege", `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\``, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
     else if (event.gameMode === "Hot Zone"  && event.slotName !== "Power Play") {
       embed.addField("<:HotZone:710941988010197042> Hot Zone", `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\``, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
     else if (event.slotName === "Power Play") {
       let emoji;
       let modifierEmoji
       let color;
       let modifier = ''
       if (event.gameMode === "Gem Grab") {
         emoji = "<:Gem_Grab:707489355857657906>"
         color = "#9400D3"
       }
       if (event.gameMode === "Showdown" || event.gameMode === "Duo Showdown") {
         color = "#7FFF00"
         emoji = "<:Solo:707060594393612319>"
         if (event.modifierName === "Energy Drink")  modifierEmoji = '<:EnergyDrink:709094651147059310>'
         if (event.modifierName === "Meteor Shower") modifierEmoji = '<:MeteorShower:709094650899857449>'
         if (event.modifierName === "Healing Mushrooms") modifierEmoji ='<:HealingMushrooms:709094650874560564>'
         if (event.modifierName === "Angry Robo") modifierEmoji = "<:AngryRobo:709101566107582605>"
         if (event.hasModifier === true) modifier = `${modifierEmoji} Modifier - \`${event.modifierName}\``
       }
       if (event.gameMode === "Brawl Ball") {
         color = "#87CEFA"
         emoji = "<:Brawl_Ball:707489332730134580>"
       }
       if (event.gameMode === "Bounty") {
         color = "#FFD700"
         emoji = "<:Bounty:707489449667461171>"
       }
       if (event.gameMode === "Heist") {
         color = "#FF00FF"
         emoji = "<:Heist:709097309698523166>"
       }
       if (event.gameMode === "Siege") {
         color = "#FF4500"
         emoji = "<:Siege:707489394042601472>"
       }
       embed.addField("<:PowerPlay:707060644209491968> Power Play", `${emoji} Event - \`${event.gameMode}\`\n🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\`\n${modifier}`, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     } else if (event.gameMode !== "Duo Showdown") {
       embed.addField(`<:Clipboard:710942296639668296> ${event.gameMode}`, `🗺️ [Map](${event.mapImageUrl}) - \`${event.mapName}\`\n⏱️ Started - \`${dateformat(event.startTime, "m/d/yy, h:MM TT")}\`\n🏁 Ends at - \`${dateformat(event.endTime, "m/d/yy, h:MM TT")}\``, true)
       if ([1, 4, 7, 10].includes(embed.fields.length)) embed.addField("\u200b", "\u200b", true)
     }
 });
  message.channel.send(embed)
}).catch(err => console.log(err))
}

exports.help = {
  name: "events",
  description: "Lists the current or upcoming events",
  usage: "events <current / upcoming>",
  category : "Brawl Stars"
}

exports.aliases = []
