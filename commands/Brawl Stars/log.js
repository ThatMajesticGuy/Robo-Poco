const Discord = require('discord.js');

const Brawlstars = require("brawlstars.js")
const token = process.env.BS_KEY
const client = new Brawlstars.Client(token)

const user = require('../../models/user.js')
const Canvas = require('canvas')

function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

function capsOne (str) {
  if (str === "8-BIT") return "8-Bit"
  if (str === "EL PRIMO") return "El Primo"
  if (str === "MR. P") return "Mr. P"
  let test = str.split("").slice(0, 1)
  let test2 = str.split("").slice(1, str.length).join("").toLowerCase()
  return test+test2
}

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

const colorObj = {
  Shelly: "#DA70D6",
  Nita: "#DEB887",
  Colt: "#DC143C",
  Bull: "#A9A9A9",
  Jessie: "#DC143C",
  Brock: "#C0C0C0",
  Dynamike: "#FF0000",
  Bo: "#FFA500",
  Tick: "#6A5ACD",
  '8 Bit': "#6A5ACD",
  Emz: "#DA70D6",
  "El Primo": "#6A5ACD",
  Barley: "#C0C0C0",
  Poco: "#FFA500",
  Rosa: "#FF69B4",
  Rico: "#C0C0C0",
  Darryl: "#6A5ACD",
  Penny: "#FF69B4",
  Carl: "#6A5ACD",
  Jacky: "#6A5ACD",
  Piper: "#B0E0E6",
  Pam: "#DC143C",
  Frank: "#E6E6FA",
  Bibi: "#BA55D3",
  Bea: "#DDA0DD",
  Mortis: "#BA55D3",
  Tara: "#FF69B4",
  Gene: "#EE82EE",
  Max: "#FF0000",
  'Mr P': "#87CEFA",
  Sprout: "#FFA500",
  Spike: "#00FF00",
  Crow: "#A9A9A9",
  Leon: "#00FF00",
  Sandy: "#EE82EE",
  Gale: "#87CEFA"
}

let emojis = []


exports.run = (bot, message, args) => {
  let leaderboard = [
  bot.emojis.cache.find(e => e.name === "Leaderboard1" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard2" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard3" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard4" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard5" && e.guild.id === "707060962347450389"),    
  bot.emojis.cache.find(e => e.name === "Leaderboard6" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard7" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard8" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard9" && e.guild.id === "707060962347450389"),
  bot.emojis.cache.find(e => e.name === "Leaderboard10" && e.guild.id === "707060962347450389"),
]
  if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  user.findOne({id: message.author.id}, async (err, res) => {
    if (!res && !args[0]) {
  const embed3 = new Discord.MessageEmbed()
  .setDescription("<:Carl:706028393426321519> **You don't have a saved player tag!**\n\nSteps to Link Brawl Stars with Discord:\n------------------\n\n1. Go to Brawl Stars\n2. Click on your Name\n3. Copy your Player Tag (Under Profile Picture) and do **`p!sync [player id]`** to link to Discord!")
  .setColor("RED")
  .setFooter("Alternatively, you can do p!profile [tag] to see your profile and other people's profiles", message.author.displayAvatarURL())
  .setImage("https://cdn.glitch.com/1d706fd6-17e6-4ea9-841b-fb31d1ba73d7%2FBrawl%20Stars%20Tag%20Tutorial.gif?v=1589082798432")
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
      let person;
    if (args[0] && !args[0].startsWith("#") && !Number(args[0])) args[0] = "#" + args[0]
    
    if (args[0] && !message.mentions.users.first() && !Number(args[0])) {
      func = client.getPlayerBattlelog(args[0])
      person = args[0]
    }
    else if (u !== "abcbahwbuiew") {
      if (out) {
        func = client.getPlayerBattlelog(out.tag)
        person = out.tag
      }
      else return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Carl:706028393426321519> **${message.guild.members.cache.find(u => u.user.id === u) || message.guild.members.cache.find(u => u.user.id === member.user.id) || "That User"}** does not have their account synced!`))
    }
    else {
      func = client.getPlayerBattlelog(res.tag)
      person = res.tag
    }
  func.then(async player => {
    const player2 = await client.getPlayer(person)
    let battles = [player.battles[0], player.battles[1], player.battles[2]]
    
    let participants1 = []
    let emoji = ''
    
    const canvas = Canvas.createCanvas(2000, 1125);
    const ctx = canvas.getContext('2d');

    Canvas.registerFont('Lilita.ttf', { family: 'Lilita' })
    const background = await Canvas.loadImage('https://cdn.glitch.com/1d706fd6-17e6-4ea9-841b-fb31d1ba73d7%2FLog%20Template.png?v=1589248900872');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(255, 0, 0, 0)';
    ctx.strokeRect(0, 0, canvas.width, canvas.height); 
    
   ctx.rect(709, 101, 565, 926);
   ctx.rect(51, 101, 565, 926)
   ctx.rect(1385, 102, 565, 926)
	 ctx.clip();
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`**${player2.name}**'s Past 3 Battles`)
    .setColor('4CEF8B')
    battles.forEach((battle, i) => {
      if (battle.event.mode === "brawlBall") {
        battle.event.mode = "Brawl Ball"
        emoji = "<:Brawl_Ball:707489332730134580>"
      }
      else if (battle.event.mode === "bounty") {
        battle.event.mode = "Bounty"
        emoji = "<:Bounty:707489449667461171>"
      }
      else if (battle.event.mode === "gemGrab") {
        battle.event.mode = "Gem Grab"
        emoji = "<:Gem_Grab:707489355857657906>"
      }
      else if (battle.event.mode === "soloShowdown") {
        battle.event.mode = "Solo Showdown"
        emoji = "<:Solo:707060594393612319>"
      }
      else if (battle.event.mode === "duoShowdown") {
        battle.event.mode = "Duo Showdown"
        emoji = "<:Duo:707060608436011030>"
      }
      else if (battle.event.mode === "siege") {
        battle.event.mode = "Siege"
        emoji = "<:Siege:707489394042601472>"
      }
      else if (battle.event.mode === "heist") {
        battle.event.mode = "Heist"
        emoji = "<:Heist:709097309698523166>"
      }
      else if (battle.event.mode === "hotZone") battle.event.mode = "Hot Zone"
      else if (battle.event.mode === "bossFight") {
        battle.event.mode = "Boss Fight"
        emoji = "<:BossFight:707061060041179148>"
      }
      else if (battle.event.mode === "roboRumble") {
        battle.event.mode = "Robo Rumble"
        emoji = '<:RoboRumble:707085036062638081>'
      }
      if (battle.battle.result === "defeat") battle.battle.result = "Defeat"
      if (battle.battle.result === "victory") battle.battle.result = "Victory"
      if (battle.battle.result === "draw") battle.battle.result = "Draw"
      
      if (battle.battle.trophyChange > 0) battle.battle.trophyChange = "+" + battle.battle.trophyChange
      if (battle.battle.trophyChange === 0) battle.battle.trophyChange = "0"
      
      if (battle.event.mode === "Brawl Ball" || battle.event.mode === "Bounty" || battle.event.mode == "Gem Grab" || battle.event.mode === "Siege" || battle.event.mode === "Heist" || battle.event.mode === "Hot Zone") {
        let bemoji1 = []
      let bemoji2 = []
      let sp = []
      
      let complete = false
      battle.battle.teams[0].forEach((b, h) => {
        if (b.name === "NA") b.name = "Bot"
        let starplayer = false
        if (battles[i].battle.starPlayer.tag === b.tag) starplayer = true
      Object.keys(colorObj).forEach(e => {
        if (complete === true) return;
      if (b.brawler.name === "8-BIT") {
        bemoji1.push({color: "#6A5ACD", name: b.name, tag: b.tag, starplayer: starplayer, brawler: "8-Bit"})
        if (starplayer === true) sp.push({color: "#6A5ACD", name: b.name, tag: b.tag, brawler: "8-Bit"})
        complete = true
      }
      else if (b.brawler.name === "EL PRIMO") {
        bemoji1.push({color: "#6A5ACD", name: b.name, tag: b.tag, starplayer: starplayer, brawler:"Mr. P"})
        if (starplayer === true) sp.push({color: "#6A5ACD", name: b.name, tag: b.tag, brawler: "Mr. P"})
        complete = true
      }
      else if (b.brawler.name === "MR. P") {
        bemoji1.push({color: "#87CEFA", name: b.name, tag: b.tag, starplayer: starplayer, brawler: "Mr. P"})
        if (starplayer === true) sp.push({color: "#87CEFA", name: b.name, tag: b.tag, brawler: "Mr. P"})
        complete = true
      }
      
      else if (e.includes(capsOne(b.brawler.name))) {
        bemoji1.push({color: colorObj[e], name: b.name, tag: b.tag, starplayer: starplayer, brawler: e})
        if (starplayer === true) sp.push({color: colorObj[e], name: b.name, tag: b.tag, brawler: e})
        complete = true
      }
      })
        complete = false
      });
      
      battle.battle.teams[1].forEach((b, h) => {
        let starplayer = false
        if (battles[i].battle.starPlayer.tag === b.tag) starplayer = true
        if (b.name === "NA") b.name = "Bot"
      Object.keys(colorObj).forEach(e => {
        if (complete === true) return;
      if (b.brawler.name === "8-BIT") {
        bemoji2.push({color: "#6A5ACD", name: `${b.name}`, tag: b.tag, starplayer: starplayer, brawler: "8-Bit"})
        if (starplayer === true) sp.push({color: "#6A5ACD", name: `${b.name}`, tag: b.tag, brawler: "8-Bit"})
        complete = true
      }
      else if (b.brawler.name === "EL PRIMO") {
        bemoji2.push({color: "#6A5ACD", name: `${b.name}`, tag: b.tag, starplayer: starplayer, brawler: "El Primo"})
        if (starplayer === true) sp.push({color: "#6A5ACD", name: `${b.name}`, tag: b.tag, brawler: "El Primo"})
        complete = true
      }
      else if (b.brawler.name === "MR. P") {
        bemoji2.push({color: "#87CEFA", name: `${b.name}`, tag: b.tag, starplayer: starplayer, brawler: "Mr. P"})
        if (starplayer === true) sp.push({color: "#87CEFA", name: `${b.name}`, tag: b.tag, brawler: "Mr. P"})
        complete = true
      }
      
      else if (e.includes(capsOne(b.brawler.name))) {
        bemoji2.push({color: colorObj[e], name: `${b.name}`, tag: b.tag, starplayer: starplayer, brawler: e})
        if (starplayer === true) sp.push({color: colorObj[e], name: `${b.name}`, tag: b.tag, brawler: e})
        complete = true
      }
      })
        complete = false
      });
    
    bemoji1.forEach((plr, p) => {
      if (plr.tag === person) bemoji1 = array_move(bemoji1, p, 0)
    })  
    bemoji2.forEach((plr, p) => {
      if (plr.tag === person) {
        let oldbemoji1 = bemoji1
        let oldbemoji2 = bemoji2
        
        bemoji2 = array_move(bemoji2, p, 0)
        bemoji1 = bemoji2
        bemoji2 = oldbemoji1
      }
    })

        let trophyChange = `Trophy Change: ${battles[i].battle.trophyChange}`
        if (battles[i].battle.trophyChange >= 0 && battles[i].battle.result === "Defeat") trophyChange = `PP Trophy Change: ${battles[i].battle.trophyChange}`
        if (battles[i].battle.trophyChange > 10) trophyChange = `PP Trophy Change: ${battles[i].battle.trophyChange}`
        if (battles[i].battle.trophyChange === undefined) trophyChange = `Trophy Change: 0`
        if (battles[i].battle.result !== "Draw" && battles[i].battle.trophyChange === "0") trophyChange = `Trophy Change: Friendlies`
        if (battles[i].battle.result === "Draw") trophyChange = `Trophy Change: 0`
        
        // Slightly smaller text placed above the member's display name
    let x = 0
    if (i === 0) x = 90
    else if (i === 1) x = 750
    else if (i === 2) x = 1430
    ctx.font = '50px Lilita';
        
    let eventColor;
    if (battles[i].event.mode === "Brawl Ball") eventColor = "#B0E0E6"
    else if (battles[i].event.mode === "Gem Grab") eventColor = "#BA55D3"
    else if (battles[i].event.mode === "Bounty") eventColor = "#FFD700"
    else if (battles[i].event.mode === "Heist") eventColor = "#FF1493"
    else if (battles[i].event.mode === "Siege") eventColor = "#ff6347"
    ctx.fillStyle = eventColor;
    if (battles[i].event.mode !== "Hot Zone") ctx.fillText(`Event: ${battles[i].event.mode}`, x, 200)
    else {
      ctx.fillStyle = "#ff3232"
      ctx.fillText("Event:", x, 200)
      ctx.fillStyle = "#87CEFA"
      ctx.fillText("Hot Zone", x + 150, 200)
    }
  
    let color = "#ff6347"
    if (battles[i].battle.result === "Victory") color = "#4CEF8B"
    else if (battles[i].battle.result === "Defeat") color = "#ff6347"
    ctx.fillStyle = color
    
    ctx.fillText(`Result: ${battles[i].battle.result}`, x, 250)

    ctx.fillStyle = '#FFA500';
    ctx.fillText(`${trophyChange}`, x, 300)
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Duration: ${fmtMSS(battles[i].battle.duration)}`, x, 350)
    if (battles[i].event.map !== "Some Assembly Required") ctx.fillText(`Map: ${battles[i].event.map}`, x, 400)
    else {
      ctx.font = "40px Lilita"
      ctx.fillText(`Map: Some Assembly\nRequired`, x, 400)
      ctx.font = "50px Lilita"
    }
    ctx.fillStyle = "#6cfddb"
    ctx.fillText("Participants:", x, 500)
    ctx.fillStyle = "#ffffff"
        
        
    ctx.font = '40px Lilita';
        
    let team1Color = '#4CEF8B'
    let team2Color = '#ff3f00'
    if (battles[i].battle.result === "Victory") {
      team1Color = "#4CEF8B"
      team2Color = "#ff3f00"
    } else if (battles[i].battle.result === "Defeat") {
      team1Color = "#ff3f00"
      team2Color = "#4CEF8B"
    }
  
    ctx.fillStyle = team1Color
    ctx.fillText(`${bemoji1[0].brawler} - ${bemoji1[0].name}`, x, 590)
    ctx.fillText(`${bemoji1[1].brawler} - ${bemoji1[1].name}`, x, 630)
    ctx.fillText(`${bemoji1[2].brawler} - ${bemoji1[2].name}`, x, 670)
  
    ctx.fillStyle = team2Color
    ctx.fillText(`${bemoji2[0].brawler} - ${bemoji2[0].name}`, x, 730)
    ctx.fillText(`${bemoji2[1].brawler} - ${bemoji2[1].name}`, x, 770)
    ctx.fillText(`${bemoji2[2].brawler} - ${bemoji2[2].name}`, x, 810)
  
    ctx.fillStyle = "#FFFF33"
    ctx.fillText("Star Player:", x, 900)
    ctx.fillText(`${sp[0].brawler} - ${sp[0].name}`, x, 940)
        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`${battles[i].battle.result}\`\n${trophyChange}\n⏱️ Duration - \`${fmtMSS(battles[i].battle.duration)}\`\n🗺️ Map - \`${battles[i].event.map}\`\n\nParticipants:\n\n${bemoji1[0].emoji} ${bemoji1[0].name}\n${bemoji1[1].emoji} ${bemoji1[1].name}\n${bemoji1[2].emoji} ${bemoji1[2].name}\n\n${bemoji2[0].emoji} ${bemoji2[0].name}\n${bemoji2[1].emoji} ${bemoji2[1].name}\n${bemoji2[2].emoji} ${bemoji2[2].name}\n\n<:Owner:707385123527589969> Star Player:\n${sp[0].emoji} \`${sp[0].name}\``, true)
          // if (i !== 2) embed.addField("\u200b", "\u200b")
        // else return
      } else if (battle.event.mode === "Solo Showdown") {
        let currentPlayer = []
        let allPlayers = []
        let powers = []
        battle.battle.players.forEach((p, t) => {
          powers.push(p.brawler.power)
          
          let completed = false
          Object.keys(colorObj).forEach(e => {
            if (completed === true) return;
            if (p.brawler.name === "8-BIT") {
              if (p.tag === person) p.name = p.name
              allPlayers.push({name: p.name, color: "#6A5ACD", tag: p.tag, brawler: "8-Bit"})
              completed = true
            }
            else if (p.brawler.name === "MR. P") {
              if (p.tag === person) p.name = p.name 
              allPlayers.push({name: p.name, color: "#87CEFA", tag: p.tag, brawler: "Mr. P"})
              completed = true
            }
            else if (p.brawler.name === "EL PRIMO") {
              if (p.tag === person) p.name = p.name 
            allPlayers.push({name: p.name, color: "#6A5ACD", tag: p.tag, brawler: "El Primo"})
              completed = true
            }
            else if (e.includes(capsOne(p.brawler.name))) {
              if (p.tag === person) p.name = p.name 
              allPlayers.push({name: p.name, color: colorObj[e], tag: p.tag, brawler: capsOne(p.brawler.name)})
              completed = true
            }
          });
        });
    

        let trophyChange = `Trophy Change: ${battles[i].battle.trophyChange}`
        if (battles[i].battle.trophyChange >= 0 && battles[i].battle.result === "Defeat") trophyChange = `PP Trophy Change: ${battles[i].battle.trophyChange}`
        if (battles[i].battle.trophyChange > 10) trophyChange = `PP Trophy Change: ${battles[i].battle.trophyChange}`
        if (powers.every(v => v === powers[0]) === true) trophyChange = `PP Trophies Change: ${battles[i].battle.trophyChange || "Friendlies"}`
        if (battles[i].battle.trophyChange === undefined) trophyChange = `Trophy Change: 0`
        if (battles[i].battle.result === "Draw") trophyChange = `Trophy Change: 0`
    ctx.font = '50px Lilita';
        
    let x = 0
    if (i === 0) x = 90
    else if (i === 1) x = 750
    else if (i === 2) x = 1430    
        
    let rankColor = "#C0C0C0"
    if ([1, 2, 3, 4].includes(battles[i].battle.rank)) rankColor = "#4CEF8B"
    else if ([6, 7, 8, 9, 10].includes(battles[i].battle.rank)) rankColor = "#ff6347"
    else if ([5].includes(battles[i].battleRank)) rankColor = "#C0C0C0"
    ctx.fillStyle = "#ADFF2F"
    ctx.fillText('Event: Solo Showdown', x, 200)
    ctx.fillStyle = rankColor
    ctx.fillText(`Rank: ${battles[i].battle.rank}`, x, 250)
    ctx.fillStyle = '#FFA500';
    ctx.fillText(`${trophyChange}`, x, 300)
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Duration: N/A`, x, 350)
    ctx.fillText(`Map: ${battles[i].event.map}`, x, 400)
    ctx.fillStyle = "#6cfddb"
    ctx.fillText("Participants:", x, 500)
        
    ctx.font = '40px Lilita';   
        
    ctx.fillStyle = "#FFD700"
    ctx.fillText(`1. ${allPlayers[0].brawler} - ${allPlayers[0].name}`, x, 590)
  
    ctx.fillStyle = "#C0C0C0"
    ctx.fillText(`2. ${allPlayers[1].brawler} - ${allPlayers[1].name}`, x, 630)
  
    ctx.fillStyle = "#cd7f32"
    ctx.fillText(`3. ${allPlayers[2].brawler} - ${allPlayers[2].name}`, x, 670)
  
    ctx.fillStyle = "#808080"
    ctx.fillText(`4. ${allPlayers[3].brawler} - ${allPlayers[3].name}`, x, 710)

    ctx.fillText(`5. ${allPlayers[4].brawler} - ${allPlayers[4].name}`, x, 750)
 
    ctx.fillText(`6. ${allPlayers[5].brawler} - ${allPlayers[5].name}`, x, 790)

    ctx.fillText(`7. ${allPlayers[6].brawler} - ${allPlayers[6].name}`, x, 830)

    ctx.fillText(`8. ${allPlayers[7].brawler} - ${allPlayers[7].name}`, x, 870)
 
    ctx.fillText(`9. ${allPlayers[8].brawler} - ${allPlayers[8].name}`, x, 910)
  
    ctx.fillText(`10. ${allPlayers[9].brawler} - ${allPlayers[9].name}`, x, 950)
        
        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`Rank ${battles[i].battle.rank}\`\n<:Trophies:707016913372577812> Trophy Change - \`${battles[i].battle.trophyChange || "Friendlies"}\`\n⏱️ Duration - \`N/A\`\n🗺️ Map - \`${battles[i].event.map}\`\n\nParticipants:\n\n<:Leaderboard1:707428247532732427> ${allPlayers[0].e} \`${allPlayers[0].name}\`\n<:Leaderboard2:707430646926147614> ${allPlayers[1].e} \`${allPlayers[1].name}\`\n<:Leaderboard3:707431877992251453> ${allPlayers[2].e} \`${allPlayers[2].name}\`\n<:Leaderboard4:707327422349180938> ${allPlayers[3].e}  \`${allPlayers[3].name}\`\n<:Leaderboard5:707327422420484211> ${allPlayers[4].e} \`${allPlayers[4].name}\`\n<:Leaderboard6:707327422349049997> ${allPlayers[5].e} \`${allPlayers[5].name}\`\n<:Leaderboard7:707327422261100556> ${allPlayers[6].e} \`${allPlayers[6].name}\`\n<:Leaderboard8:707327422386667590> ${allPlayers[7].e} \`${allPlayers[7].name}\n\`<:Leaderboard9:707450211991027713> ${allPlayers[8].e} \`${allPlayers[8].name}\`\n<:Leaderboard10:707449718069788743> ${allPlayers[9].e} \`${allPlayers[9].name}\``, true)
      } else if (battle.event.mode === "Duo Showdown") {
        let teams = []
        
        let people1 = []
        let people2 = []
        
        let powers = []
        battle.battle.teams.forEach((p, t) => {
          people1.push(p[0])
          people2.push(p[1])
          
          powers.push(p[0].brawler.power)
          powers.push(p[1].brawler.power)
          });

          
        people1.forEach((p, t) => {
          
          Object.keys(colorObj).forEach(e => {

            if (p.brawler.name === "8-BIT") {
 
              if (teams[t] && teams[t].tag1 === p.tag) return;
              teams[t] = {name1: p.name, color1: "#6A5ACD", tag1: p.tag, brawler1: "8-Bit"}
            }
            else if (p.brawler.name === "MR. P") {

              if (teams[t] && teams[t].tag1 === p.tag) return;
              teams[t] = {name1: p.name, color1: "#87CEFA", tag1: p.tag, brawler1: "Mr. P"}
            }
            else if (p.brawler.name === "EL PRIMO") {

              if (teams[t] && teams[t].tag1 === p.tag) return;
              teams[t] = {name1: p.name, color1: "#6A5ACD", tag1: p.tag, brawler1: "El Primo"}
            }
            else if (e.includes(capsOne(p.brawler.name))) {
              if (teams[t] && teams[t].tag1 === p.tag) return;
              teams[t] = {name1: p.name, color1: colorObj[e], tag1: p.tag, brawler1: capsOne(p.brawler.name)}
            } else teams[t] = {name1: p.name, color1: "#C0C0C0", tag1: p.tag, brawler1: capsOne(p.brawler.name)}
          });
        });
          
          people2.forEach((p, t) =>  {
            Object.keys(colorObj).forEach(e => {
            if (p.brawler.name === "8-BIT" ) {
              if (teams[t] && teams[t].tag2 === p.tag) return;
              teams[t] = {name1: teams[t].name1, color1: teams[t].color1, tag1: teams[t].tag1, brawler1: teams[t].brawler1, name2: p.name, color2: "#6A5ACD", tag2: p.tag, brawler2: "8-Bit"}
            }
            else if (p.brawler.name === "MR. P") {
              if (teams[t] && teams[t].tag2 === p.tag) return;
              teams[t] = {name1: teams[t].name1, color1: teams[t].color1, tag1: teams[t].tag1, brawler1: teams[t].brawler1, name2: p.name, color2: "#87CEFA", tag2: p.tag, brawler2: "Mr. P"}
            }
            else if (p.brawler.name === "EL PRIMO") {
              if (teams[t] && teams[t].tag2 === p.tag) return;
              teams[t] = {name1: teams[t].name1, color1: teams[t].color1, tag1: teams[t].tag1, brawler1: teams[t].brawler1, name2: p.name, color2: "#6A5ACD", tag2: p.tag, brawler2: "El Primo"}
            }
            else if (e.includes(capsOne(p.brawler.name))) {
              if (teams[t] && teams[t].tag2 === p.tag) return;
              teams[t] = {name1: teams[t].name1, color1: teams[t].color1, tag1: teams[t].tag1, name2: p.name, color2: colorObj[e], tag2: p.tag}
            } else teams[t] = {name1: teams[t].name1, color1: teams[t].color1, tag1: teams[t].tag1, brawler1: teams[t].brawler1, name2: p.name, color2: '#C0C0C0', tag2: p.tag, brawler2: capsOne(p.brawler.name)}
          });
        });
        let moreInfo = ''
        teams.forEach((team, index) => {
          let name1 = team.name1
          let e1 = team.color1
          let tag1 = team.tag1
          let brawler1 = team.brawler1
          
          if (team.tag2 === person) {
          teams[index].name1 = team.name2
          teams[index].color1 = team.color2
          teams[index].tag1 = team.tag2
          teams[index].brawler1 = team.brawler2
            
          teams[index].name2 = name1
          teams[index].color2 = e1
          teams[index].tag2 = tag1
          teams[index].brawler2 = brawler1
          }
          let emoji = ''
          if (index === 0) emoji = '<:Leaderboard1:707428247532732427>'
          if (index === 1) emoji = '<:Leaderboard2:707430646926147614>'
          if (index === 2) emoji = '<:Leaderboard3:707431877992251453>'
          if (index === 3) emoji = '<:Leaderboard4:707327422349180938>'
          if (index === 4) emoji = '<:Leaderboard5:707327422420484211>'
          if (team.tag1 === person) moreInfo = `\n\n${emoji} ${team.e1} \`${team.name1}\`\n${emoji} ${team.e2} \`${team.name2}\``
        })
        
        
        let trophyChange = `Trophy Change: ${battles[i].battle.trophyChange || "0"}`
        if (powers.every(v => v === powers[0]) === true) trophyChange = `PP Trophies Change: ${battles[i].battle.trophyChange || "0"}`
        
    ctx.font = '50px Lilita';
        
    let x = 0
    if (i === 0) x = 90
    else if (i === 1) x = 750
    else if (i === 2) x = 1430
        
    let rankColor = "#C0C0C0"
    if ([1, 2].includes(battles[i].battle.rank)) rankColor = "#4CEF8B"
    else if ([4, 5].includes(battles[i].battle.rank)) rankColor = "#ff6347"
    else if ([3].includes(battles[i].battleRank)) rankColor = "#C0C0C0"
        
    ctx.fillStyle = "#ADFF2F"
    ctx.fillText('Event: Duo Showdown', x, 200)
    ctx.fillStyle = rankColor
    ctx.fillText(`Rank: ${battles[i].battle.rank || "Unknown"}`, x, 250)
    ctx.fillStyle = '#FFA500';
    ctx.fillText(trophyChange, x, 300)
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Duration: N/A`, x, 350)
    ctx.fillText(`Map: ${battles[i].event.map}`, x, 400)
    ctx.fillStyle = "#6cfddb"
    ctx.fillText("Participants:", x, 500)
    
        
    ctx.font = '40px Lilita';   
    ctx.fillStyle = '#FFD700'
    ctx.fillText(`1. ${teams[0].brawler1} - ${teams[0].name1}`, x, 590)
    ctx.fillText(`1. ${teams[0].brawler2} - ${teams[0].name2}`, x, 630)
  
    ctx.fillStyle = '#C0C0C0'
    ctx.fillText(`2. ${teams[1].brawler1} - ${teams[1].name1}`, x, 670)
    ctx.fillText(`2. ${teams[1].brawler2} - ${teams[1].name2}`, x, 710)
  
    ctx.fillStyle = '#cd7f32'
    ctx.fillText(`3. ${teams[2].brawler1} - ${teams[2].name1}`, x, 750)
    ctx.fillText(`3. ${teams[2].brawler2} - ${teams[2].name2}`, x, 790)
  
    ctx.fillStyle = "#808080"
    ctx.fillText(`4. ${teams[3].brawler1} - ${teams[3].name1}`, x, 830)
    ctx.fillText(`4. ${teams[3].brawler2} - ${teams[3].name2}`, x, 870)
  
    ctx.fillText(`5. ${teams[4].brawler1} - ${teams[4].name1}`, x, 910)
    ctx.fillText(`5. ${teams[4].brawler2} - ${teams[4].name2}`, x, 950)
        
        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`Rank ${battles[i].battle.rank}\`\n${trophyChange}\n⏱️ Duration - \`N/A\`\n🗺️ Map - \`${battles[i].event.map}\`\n\nParticipants:\n\n<:Leaderboard1:707428247532732427> - Rank 1 \n${teams[0].e1} \`${teams[0].name1}\`\n${teams[0].e2} \`${teams[0].name2}\`\n\n<:Leaderboard2:707430646926147614> - Rank 2\n${teams[1].e1} \`${teams[1].name1}\`\n${teams[1].e2} \`${teams[1].name2}\`${moreInfo}`, true)
        teams = []
      } else if (battle.event.mode === "Boss Fight") {
        ctx.font = '50px Lilita';
        
    let x = 0
    if (i === 0) x = 90
    else if (i === 1) x = 750
    else if (i === 2) x = 1430    
        
    let allPlayers = []

        battle.battle.players.forEach((p, t) => {
          
          let completed = false
          Object.keys(colorObj).forEach(e => {
            if (completed === true) return;
            if (p.brawler.name === "8-BIT") {
              if (p.tag === person) p.name = p.name
              allPlayers.push({name: p.name, color: "#6A5ACD", tag: p.tag, brawler: "8-Bit"})
              completed = true
            }
            else if (p.brawler.name === "MR. P") {
              if (p.tag === person) p.name = p.name 
              allPlayers.push({name: p.name, color: "#87CEFA", tag: p.tag, brawler: "Mr. P"})
              completed = true
            }
            else if (p.brawler.name === "EL PRIMO") {
              if (p.tag === person) p.name = p.name 
            allPlayers.push({name: p.name, color: "#6A5ACD", tag: p.tag, brawler: "El Primo"})
              completed = true
            }
            else if (e.includes(capsOne(p.brawler.name))) {
              if (p.tag === person) p.name = p.name 
              allPlayers.push({name: p.name, color: colorObj[e], tag: p.tag, brawler: capsOne(p.brawler.name)})
              completed = true
            }
          });
        });
        allPlayers.forEach((plr, p) => {
      if (plr.tag === person) allPlayers = array_move(allPlayers, p, 0)
    })  
    ctx.fillStyle = "#FF0000"
    ctx.fillText('Event: Boss Fight', x, 200)
    let color = "#ff6347"
    if (battles[i].battle.result === "Victory") color = "#4CEF8B"
    else if (battles[i].battle.result === "Defeat") color = "#ff6347"
    ctx.fillStyle = color
    ctx.fillText(`Result: ${battles[i].battle.result}`, x, 250)
    ctx.fillStyle = "#FFA500"
    ctx.fillText(`Level: ${battles[i].battle.level.name}`, x, 300)
    ctx.fillStyle = "#ffffff"
    ctx.fillText(`Duration: N/A`, x, 350)
    ctx.fillText(`Map: ${battles[i].event.map}`, x, 400)
    ctx.fillStyle = "#6cfddb"
    ctx.fillText("Participants:", x, 500)
    
 
    ctx.fillStyle = color
    ctx.font = '40px Lilita';
    ctx.fillText(`${allPlayers[0].brawler} - ${allPlayers[0].name}`, x, 590)
    ctx.fillText(`${allPlayers[1].brawler} - ${allPlayers[1].name}`, x, 630)
    ctx.fillText(`${allPlayers[2].brawler} - ${allPlayers[2].name}`, x, 670)
     /* } else if (battle.event.mode === "Robo Rumble") {
        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`${battles[i].battle.result}\`\n<:XP:707066788860657785> Difficulty - \`${battles[i].battle.level.name}\`\n\nParticipants:\n\n*Coming Soon...*`, true)
*/
      } else {
       let x = 0
       if (i === 0) x = 90
       else if (i === 1) x = 750
       else if (i === 2) x = 1430    
    ctx.font = '50px Lilita';
    ctx.fillStyle = "#ff6347"
    ctx.fillText('?? Unknown Event ??', x, 200)
    ctx.fillStyle = "#ffffff"
    ctx.font = "40px Lilita"
    ctx.fillText("We sadly do not know what this\nevent is.\nIs it a fairly new event?\n\n344421961146957826Contact me if so:\nThatMajesticGuy#7530", x - 30, 400)

        embed.addField(`\`${i + 1}.\` ❓ Unknown Event`, `We sadly do not know what this event is. Is it a farily new event? Let <@262410813254402048> know!`, true)
      }
    })
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'log.png');

    message.channel.send(attachment);
  }).catch(err => message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> That is not a valid player tag!")))
    });
  });
}

exports.help = {
  name: "log",
  description: "Gives the information of your past 3 battles",
  usage: 'log'
}

exports.aliases = []
