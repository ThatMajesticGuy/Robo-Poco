const Discord = require('discord.js');
const user = require('../../models/user.js')

const Brawlstars = require("brawlstars.js")
const token = process.env.BS_KEY
const client = new Brawlstars.Client(token)

exports.run = (bot, message, args) => {
  if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  user.findOne({id: message.author.id}, async (err, res) => {
    
    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> **You didn't provide your player tag!**\n\nSteps to Link Brawl Stars with Discord:\n------------------\n\n1. Go to Brawl Stars\n2. Click on your Name\n3. Copy your Player Tag (Under Profile Picture) and do **`p!sync [player id]`** to link to Discord!").setImage("https://cdn.brawlstats.com/creatives/hashtag-guide-3frame-50percsmall.gif"))
    if (!args[0].startsWith("#")) args[0] = "#" + args[0]
    client.getPlayer(args[0]).then(player => {
      
      if (!res) {
        user.findOne({tag: args[0]}, async (err, out) => {
          if (out) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> That Tag is already synced with another Discord Account!"))
          
          new require('../../models/user.js')({
          id: message.author.id,
          tag: args[0]
          }).save().then(result => {
          console.log(result)
          })
          
           message.channel.send(new Discord.MessageEmbed().setColor('4CEF8B').setDescription(`<:Carl:706028393426321519> Synced your Brawl Stars Account **${player.name}** with your Discord Account!\n\nNow you can use all the Brawl Stars commands!`))
        });
      } else {
        user.findOne({tag: args[0]}, async (err, out) => {
          
          if (res.tag === args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> That is already your tag!"))
          
          if (out) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> That Tag is already synced with another Discord Account!"))
          
          message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Carl:706028393426321519> Resynced your New Brawl Stars Account **${player.name}** with your Discord Account!\n\nWas that tag not your account? If so, please resync with your other account!`))
          
          user.updateOne({id: message.author.id}, {tag: args[0]}, (err, res) => {
            if (err) console.log(err)
          })
          
      });
      };
      
    }).catch(err => message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(":Carl: **Invalid Player Tag!**\n\nSteps to Link Brawl Stars with Discord:\n------------------\n\n1. Go to Brawl Stars\n2. Click on your Name\n3. Copy your Player Tag (Under Profile Picture) and do **`p!sync [player id]`** to link to Discord!").setImage("https://cdn.brawlstats.com/creatives/hashtag-guide-3frame-50percsmall.gif")))
  });
}

exports.help = {
  name: 'sync',
  description: "Syncs your Brawl Stars account with your Discord Account",
  usage: "sync [Player Tag]",
  category: "Brawl Stars"
}
exports.aliases = ['save', 'set']