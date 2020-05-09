const Discord = require('discord.js');
const user = require('../../models/user.js')

const Brawlstars = require("brawlstars.js")
const token = process.env.BS_KEY
const client = new Brawlstars.Client(token)


exports.run = async (bot, message, args) => {
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
      let person = ''
     if (u !== "abcbahwbuiew") {
      if (out) {
        const player = await client.getPlayer(out.tag)
        person = player.tag
        func = client.getClub(player.club.tag)
      }
      else return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Carl:706028393426321519> **${message.mentions.users.first().username || member.user.id}** does not have their account synced!`))
    }
    else {
      const player = await client.getPlayer(res.tag)
      person = player.tag
      func = client.getClub(player.club.tag)
    }

  func.then(club => {
    let type;
    if (club.type === "inviteOnly") type = "Invite Only"
    else type = "Open"
    
    let owner;
    let onBoard = false
    let moreBoard = ''
   club.members.forEach((memb, i) => {
     if (memb.role === "president") owner = memb
     if ([0, 1, 2, 3 , 4].includes(i) && memb.tag ===  person) onBoard = true
     else if (![0, 1, 2, 3 , 4].includes(i) && memb.tag === person) {
       onBoard = false
       moreBoard = {info: memb, place: i + 1}
     }
   })
    let members = club.members.filter(m => m.role === "member").length || 0
    let seniors = club.members.filter(m => m.role === "senior").length || 0
    let vice = club.members.filter(m => m.role === "vicePresident").length || 0
    
    
    let moreinfo = ''
    if (onBoard === false && moreBoard !== "") moreinfo = `\n...\n\`${moreBoard.place}. ${moreBoard.info.name} (${moreBoard.info.tag})\` <:Trophies:707016913372577812> ${moreBoard.info.trophies.toLocaleString()}`
    
    let leaderboard = ''
    if (club.members.length === 1) leaderboard = `<:Leaderboard1:707428247532732427> \`${club.members[0].name} (${club.members[0].tag})\` <:Trophies:707016913372577812> ${club.members[0].trophies.toLocaleString()}`
    else if (club.members.length === 2) leaderboard = `<:Leaderboard1:707428247532732427> \`${club.members[0].name} (${club.members[0].tag})\` <:Trophies:707016913372577812> ${club.members[0].trophies.toLocaleString()}\n<:Leaderboard2:707430646926147614> \`${club.members[1].name} (${club.members[1].tag})\` <:Trophies:707016913372577812> ${club.members[1].trophies.toLocaleString()}`
    else if (club.members.length === 3) leaderboard = `<:Leaderboard1:707428247532732427> \`${club.members[0].name} (${club.members[0].tag})\` <:Trophies:707016913372577812> ${club.members[0].trophies.toLocaleString()}\n<:Leaderboard2:707430646926147614> \`${club.members[1].name} (${club.members[1].tag})\` <:Trophies:707016913372577812> ${club.members[1].trophies.toLocaleString()}\n<:Leaderboard3:707431877992251453> \`${club.members[2].name} (${club.members[2].tag})\` <:Trophies:707016913372577812> ${club.members[2].trophies.toLocaleString()}`
    else if (club.members.length === 4) leaderboard = `<:Leaderboard1:707428247532732427> \`${club.members[0].name} (${club.members[0].tag})\` <:Trophies:707016913372577812> ${club.members[0].trophies.toLocaleString()}\n<:Leaderboard2:707430646926147614> \`${club.members[1].name} (${club.members[1].tag})\` <:Trophies:707016913372577812> ${club.members[1].trophies.toLocaleString()}\n<:Leaderboard3:707431877992251453> \`${club.members[2].name} (${club.members[2].tag})\` <:Trophies:707016913372577812> ${club.members[2].trophies.toLocaleString()}\n<:Leaderboard4:707327422349180938> \`${club.members[3].name} (${club.members[3].tag})\` <:Trophies:707016913372577812> ${club.members[3].trophies.toLocaleString()}`
    else if (club.members.length >= 5) leaderboard = `<:Leaderboard1:707428247532732427> \`${club.members[0].name} (${club.members[0].tag})\` <:Trophies:707016913372577812> ${club.members[0].trophies.toLocaleString()}\n<:Leaderboard2:707430646926147614> \`${club.members[1].name} (${club.members[1].tag})\` <:Trophies:707016913372577812> ${club.members[1].trophies.toLocaleString()}\n<:Leaderboard3:707431877992251453> \`${club.members[2].name} (${club.members[2].tag})\` <:Trophies:707016913372577812> ${club.members[2].trophies.toLocaleString()}\n<:Leaderboard4:707327422349180938> \`${club.members[3].name} (${club.members[3].tag})\` <:Trophies:707016913372577812> ${club.members[3].trophies.toLocaleString()}\n<:Leaderboard5:707327422420484211> \`${club.members[4].name} (${club.members[4].tag})\` <:Trophies:707016913372577812> ${club.members[4].trophies.toLocaleString()}`
    else leaderboard = 'No Leaderboard'
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`**${club.name}**`)
    .setColor("4CEF8B")
    .setFooter(`Club Tag | ${club.tag}`)
    .setDescription(`${club.description || "No Description"}`)
    .addField(":globe_with_meridians: General Information", `:mailbox_with_mail: Club Status - \`${type}\`\n<:Trophies:707016913372577812> Total Trophies - \`${club.trophies.toLocaleString()}\`\n<:HighestTrophies:707081883984592951> Required Trophies - \`${club.requiredTrophies.toLocaleString()}\``, true)
    .addField("\u200b", "\u200b", true)
    .addField("👑 President Info", `<:Owner:707385123527589969> President - \`${owner.name}\`\n🗞️ Tag - \`${owner.tag}\`\n<:Trophies:707016913372577812> Trophies - \`${owner.trophies.toLocaleString()}\``, true)
    .addField(`👤 Members`, `👥 Number of Members - \`${members.toLocaleString()}\`\n💎 Number of Seniors - \`${seniors.toLocaleString()}\`\n🎏 Number of Vice Presidents - \`${vice.toLocaleString()}\``, true)
    .addField("\u200b", "\u200b", true)
    .addField("\u200b", `📨 [Club Invite Link](https://link.brawlstars.com/invite/band/en?tag=${club.tag.slice(1, club.tag.length)})`, true)
    .addField('🏅 Top Players', `${leaderboard}${moreinfo}`)
    message.channel.send(embed)
  }).catch(err => new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You or the Person you Provided does not have a club!"));
    });
  });
}

exports.help = {
  name: "club",
  description: "Gives information about a club",
  usage: "club <user>",
  category: "Brawl Stars"
}

exports.aliases = []
