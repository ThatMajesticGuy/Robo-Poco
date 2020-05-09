const Discord = require('discord.js');
const user = require('../../models/user.js')

const Brawlstars = require("brawlstars.js")
const token = process.env.BS_KEY
const client = new Brawlstars.Client(token)

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

exports.run = (bot, message, args) => {
  if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  user.findOne({id: message.author.id}, async (err, res) => {
  
  
  if (!res && !args[0]) {
  const embed3 = new Discord.MessageEmbed()
  .setDescription("<:Carl:706028393426321519> **You don't have a saved player tag!**\n\nSteps to Link Brawl Stars with Discord:\n------------------\n\n1. Go to Brawl Stars\n2. Click on your Name\n3. Copy your Player Tag (Under Profile Picture) and do **`p!sync [player id]`** to link to Discord!")
  .setColor("RED")
  .setFooter("Alternatively, you can do p!profile [tag] to see your profile and other people's profiles", message.author.displayAvatarURL())
  .setImage("https://cdn.brawlstats.com/creatives/hashtag-guide-3frame-50percsmall.gif")
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
    if (args[0] && !args[0].startsWith("#") && !Number(args[0])) args[0] = "#" + args[0]
    
    if (args[0] && !message.mentions.users.first() && !Number(args[0])) func = client.getPlayer(args[0])
    else if (u !== "abcbahwbuiew") {
      if (out) func = client.getPlayer(out.tag)
      else return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Carl:706028393426321519> **${message.mentions.users.first().username || member.user.username}** does not have their account synced!`))
    }
    else func = client.getPlayer(res.tag)
  func.then(player => {
    let xpMax = 40 +10 * (player.expLevel - 1)
    
    let num = 0
    let i;
for (i = 0; i < player.expLevel; i++) {
  num = num + i
}
 let neededXP = (40 * player.expLevel) + (10 * num) - player.expPoints
 
 // a few checks
 
 if (!player.trophies) player.trophies = 0
 if (!player.highestTrophies) player.highestTrophies = 0
 if (!neededXP) neededXP = 0
 if (!xpMax) xpMax = 0
    
 if (!player.trioVictories) player.trioVictories = 0
 if (!player.duoVictories) player.duoVictories = 0
 if (!player.soloVictories) player.soloVictories = 0
 if (!player.totalVictories) player.totalVictories = 0
    
  if (!player.powerPlayPoints) player.powerPlayPoints = 0
  if (!player.highestPowerPlayPoints) player.highestPowerPlayPoints = 0
  
  let clubinfo;

  if (player.club === null) clubinfo = "`Not in a Club`"
  else if (player.club !== null) clubinfo = `:homes: Club Name - \`${player.club.name}\`\n:name_badge: Club Tag - \`${player.club.tag}\`\n:desktop: Club URL - [Here](https://link.brawlstars.com/invite/band/en?tag=${player.club.tag.slice(1, player.club.tag.length)})`
    
 let championship;
    if (player.isQualifiedFromChampionshipChallenge === true) championship = "Yes"
    else championship = "No"
    
    let color;
    if (player.nameColor) color = player.nameColor.slice(4)
    else color = "4CEF8B"
    
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setFooter(`Player Tag - ${player.tag}`)
    .setTitle(`**${player.name}**'s Information`)
    .addField("<:Trophies:707016913372577812> Trophies & XP", `<:Trophies:707016913372577812> Current Trophies - \`${player.trophies.toLocaleString()}\`\n<:HighestTrophies:707081883984592951> Highest Trophies - \`${player.highestTrophies.toLocaleString()}\`\n<:XP:707066788860657785> XP - \`Level ${player.expLevel.toLocaleString()} (${neededXP.toLocaleString()}/${xpMax.toLocaleString()})\``, true)
    .addField("\u200b", "\u200b", true)
    .addField(":globe_with_meridians: General Information", `:bust_in_silhouette: Username - \`${player.name}\`\n:newspaper2: Player Tag - \`${player.tag}\`\n<:Championship:707060626794610769> Qualified For Championship - \`${championship}\``, true)
    .addField("\u200b", "\u200b")
    .addField(`🎉 Victories (${player.totalVictories.toLocaleString()} Total Victories)`, `<:3V3:707060577624653884> 3V3 Victories - \`${player.trioVictories.toLocaleString()}\`\n<:Solo:707060594393612319> Solo Showdown Victories - \`${player.soloVictories.toLocaleString()}\`\n<:Duo:707060608436011030> Duo Showdown Victories - \`${player.duoVictories.toLocaleString()}\``, true)
    .addField("\u200b", "\u200b", true)
    .addField("👥 Club", clubinfo, true)
    .addField("\u200b", "\u200b")
    .addField("⏱️ Best Times", `<:RoboRumble:707085036062638081> Robo Rumble - \`${fmtMSS(player.bestRoboRumbleTime)}\`\n<:BigBrawler:707061071889825883> Big Brawler - \`${fmtMSS(player.bestTimeAsBigBrawler)}\``, true)
    .addField("\u200b", "\u200b", true)
    .addField("<:PowerPlay:707060644209491968> Power Play", `<:PowerPlay:707060644209491968> Power Play Points - \`${player.powerPlayPoints.toLocaleString()}\`\n<:HighestTrophies:707081883984592951> Highest Power Play Points - \`${player.highestPowerPlayPoints.toLocaleString()}\``, true)
    message.channel.send(embed)
  });
});
});
};

exports.help = {
  name: "profile",
  description: "Gives information about a certain user's profile in Brawl Stars",
  usage: "profile <Player Tag>",
  category: "Brawl Stars"
}

exports.aliases = ['stats']