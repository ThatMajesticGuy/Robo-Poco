const Discord = require('discord.js');

const Brawlstars = require("brawlstars.js")
const token = process.env.BS_KEY
const client = new Brawlstars.Client(token)

const user = require('../../models/user.js')

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
  user.findOne({id: message.author.id}, async (err, res) => {
    if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
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
      else return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Carl:706028393426321519> **${message.mentions.users.first().username || member.user.username}** does not have their account synced!`))
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
      
      if (battle.event.mode === "Brawl Ball" || battle.event.mode === "Bounty" || battle.event.mode == "Gem Grab" || battle.event.mode === "Siege") {
        let bemoji1 = []
      let bemoji2 = []
      let sp = []
      
      let complete = false
      battle.battle.teams[0].forEach((b, h) => {
        if (b.name === "NA") b.name = "Bot"
        let starplayer = false
        if (battles[i].battle.starPlayer.tag === b.tag) starplayer = true
      emojis.forEach(e => {
        if (complete === true) return;
      if (b.brawler.name === "8-BIT") {
        bemoji1.push({emoji: "<:8Bit:706028391488553053>", name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: "<:8Bit:706028391488553053>", name: `\`${b.name}\``, tag: b.tag})
        complete = true
      }
      else if (b.brawler.name === "EL PRIMO") {
        bemoji1.push({emoji: "<:El_Primo:706021690924204052>", name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: "<:El_Primo:706021690924204052>", name: `\`${b.name}\``, tag: b.tag})
        complete = true
      }
      else if (b.brawler.name === "MR. P") {
        bemoji1.push({emoji: "<:MrP:706021690551042052>", name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: "<:MrP:706021690551042052>", name: `\`${b.name}\``, tag: b.tag})
        complete = true
      }
      
      else if (e.includes(capsOne(b.brawler.name))) {
        bemoji1.push({emoji: e, name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: e, name: `\`${b.name}\``, tag: b.tag})
        complete = true
      }
      })
        complete = false
      });
      
      battle.battle.teams[1].forEach((b, h) => {
        let starplayer = false
        if (battles[i].battle.starPlayer.tag === b.tag) starplayer = true
        if (b.name === "NA") b.name = "Bot"
      emojis.forEach(e => {
        if (complete === true) return;
      if (b.brawler.name === "8-BIT") {
        bemoji2.push({emoji: "<:8Bit:706028391488553053>", name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: "<:8Bit:706028391488553053>", name: `\`${b.name}\``, tag: b.tag})
        complete = true
      }
      else if (b.brawler.name === "EL PRIMO") {
        bemoji2.push({emoji: "<:El_Primo:706021690924204052>", name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: "<:El_Primo:706021690924204052>", name: `\`${b.name}\``, tag: b.tag})
        complete = true
      }
      else if (b.brawler.name === "MR. P") {
        bemoji2.push({emoji: "<:MrP:706021690551042052>", name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: "<:MrP:706021690551042052>", name: `\`${b.name}\``, tag: b.tag})
        complete = true
      }
      
      else if (e.includes(capsOne(b.brawler.name))) {
        bemoji2.push({emoji: e, name: `\`${b.name}\``, tag: b.tag, starplayer: starplayer})
        if (starplayer === true) sp.push({emoji: e, name: `\`${b.name}\``, tag: b.tag})
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

        bemoji1.forEach((pl, t) => {
          if (pl.tag === sp[0].tag) bemoji1[t].name = `\`${bemoji1[t].name}\` ⭐`
        })
        bemoji2.forEach((pl, t) => {
          if (pl.tag === sp[0].tag) bemoji2[t].name = `\`${bemoji2[t].name}\` ⭐`
        })
        let trophyChange = `<:Trophies:707016913372577812> Trophy Change - \`${battles[i].battle.trophyChange}\``
        if (battles[i].battle.trophyChange >= 0 && battles[i].battle.result === "Defeat") trophyChange = `<:PowerPlay:707060644209491968> PP Trophy Change \`${battles[i].battle.trophyChange}\``
        if (battles[i].battle.trophyChange > 10) trophyChange = `<:PowerPlay:707060644209491968> PP Trophy Change \`${battles[i].battle.trophyChange}\``
        if (battles[i].battle.result !== "Draw" && battles[i].battle.trophyChange === "0") trophyChange = `<:Trophies:707016913372577812> Trophy Change - \`FR\``
        if (battles[i].battle.result === "Draw") trophyChange = `<:Trophies:707016913372577812> Trophy Change - \`0\``

        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`${battles[i].battle.result}\`\n${trophyChange}\n⏱️ Duration - \`${fmtMSS(battles[i].battle.duration)}\`\n🗺️ Map - \`${battles[i].event.map}\`\n\nParticipants:\n\n${bemoji1[0].emoji} ${bemoji1[0].name}\n${bemoji1[1].emoji} ${bemoji1[1].name}\n${bemoji1[2].emoji} ${bemoji1[2].name}\n\n${bemoji2[0].emoji} ${bemoji2[0].name}\n${bemoji2[1].emoji} ${bemoji2[1].name}\n${bemoji2[2].emoji} ${bemoji2[2].name}\n\n<:Owner:707385123527589969> Star Player:\n${sp[0].emoji} \`${sp[0].name}\``, true)
          // if (i !== 2) embed.addField("\u200b", "\u200b")
        // else return
      } else if (battle.event.mode === "Solo Showdown") {
        let currentPlayer = []
        let allPlayers = []
        battle.battle.players.forEach((p, t) => {
          
          let completed = false
          emojis.forEach(e => {
            if (completed === true) return;
            if (p.brawler.name === "8-BIT") {
              if (p.tag === person) p.name = p.name + " <--"
              allPlayers.push({name: p.name, e: "<:8Bit:706028391488553053>", tag: p.tag})
              completed = true
            }
            else if (p.brawler.name === "MR. P") {
              if (p.tag === person) p.name = p.name + " <--"
              allPlayers.push({name: p.name, e: "<:MrP:706021690551042052>", tag: p.tag})
              completed = true
            }
            else if (p.brawler.name === "EL PRIMO") {
              if (p.tag === person) p.name = p.name + ""
            allPlayers.push({name: p.name, e: "<:El_Primo:706021690924204052>", tag: p.tag})
              completed = true
            }
            else if (e.includes(capsOne(p.brawler.name))) {
              if (p.tag === person) p.name = p.name + " <--"
              allPlayers.push({name: p.name, e: e, tag: p.tag})
              completed = true
            }
          });
        });
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
          emojis.forEach(e => {

            if (p.brawler.name === "8-BIT") {
 
              if (teams[t] && teams[t].tag1 === p.tag && teams[t].e1 !== "❓") return;
              teams[t] = {name1: p.name, e1: "<:8Bit:706028391488553053>", tag1: p.tag}
            }
            else if (p.brawler.name === "MR. P") {

              if (teams[t] && teams[t].tag1 === p.tag && teams[t].e1 !== "❓") return;
              teams[t] = {name1: p.name, e1: "<:MrP:706021690551042052>", tag1: p.tag}
            }
            else if (p.brawler.name === "EL PRIMO") {

              if (teams[t] && teams[t].tag1 === p.tag && teams[t].e1 !== "❓") return;
              teams[t] = {name1: p.name, e1: "<:El_Primo:706021690924204052>", tag1: p.tag}
            }
            else if (e.includes(capsOne(p.brawler.name))) {
              if (teams[t] && teams[t].tag1 === p.tag && teams[t].e1 !== "❓") return;
              teams[t] = {name1: p.name, e1: e, tag1: p.tag}
            } else if (!teams[t]) teams[t] = {name1: "test", e1: "❓", tag1: p.tag}
          });
        });
          
          people2.forEach((p, t) =>  {
            emojis.forEach(e => {
            if (p.brawler.name === "8-BIT" ) {
              if (teams[t] && teams[t].tag2 === p.tag && teams[t].e1 !== "❓") return;
              teams[t] = {name1: teams[t].name1, e1: teams[t].e1, tag1: teams[t].tag1, name2: p.name, e2: "<:8Bit:706028391488553053>", tag2: p.tag}
            }
            else if (p.brawler.name === "MR. P" && teams[t].e1 !== "❓") {
              if (teams[t] && teams[t].tag2 === p.tag && teams[t].e1 !== "❓") return;
              teams[t] = {name1: teams[t].name1, e1: teams[t].e1, tag1: teams[t].tag1, name2: p.name, e2: "<:MrP:706021690551042052>", tag2: p.tag}
            }
            else if (p.brawler.name === "EL PRIMO") {
              if (teams[t] && teams[t].tag2 === p.tag && teams[t].e1 !== "❓") return;
              teams[t] = {name1: teams[t].name1, e1: teams[t].e1, tag1: teams[t].tag1, name2: p.name, e2: "<:El_Primo:706021690924204052>", tag2: p.tag}
            }
            else if (e.includes(capsOne(p.brawler.name))) {
              if (p.brawler.name === "RICO") console.log(teams[t])
              if (teams[t] && teams[t].tag2 === p.tag && teams[t].e1 !== "❓") return;
              if (p.brawler.name === "RICO") console.log(teams[t])
              teams[t] = {name1: teams[t].name1, e1: teams[t].e1, tag1: teams[t].tag1, name2: p.name, e2: e, tag2: p.tag}
            } 
          });
        });
        let moreInfo = ''
        teams.forEach((team, index) => {
          let name1 = team.name1
          let e1 = team.e1
          let tag1 = team.tag1
          
          if (team.tag2 === person) {
          teams[index].name1 = team.name2
          teams[index].e1 = team.e2
          teams[index].tag1 = team.tag2
            
          teams[index].name2 = name1
          teams[index].e2 = e1
          teams[index].tag2 = tag1
          }
          let emoji = ''
          if (index === 0) emoji = '<:Leaderboard1:707428247532732427>'
          if (index === 1) emoji = '<:Leaderboard2:707430646926147614>'
          if (index === 2) emoji = '<:Leaderboard3:707431877992251453>'
          if (index === 3) emoji = '<:Leaderboard4:707327422349180938>'
          if (index === 4) emoji = '<:Leaderboard5:707327422420484211>'
          if (team.tag1 === person) moreInfo = `\n\n${emoji} ${team.e1} \`${team.name1}\`\n${emoji} ${team.e2} \`${team.name2}\``
        })
        
        
        let trophyChange = `<:Trophies:707016913372577812> Trophy Change - \`${battles[i].battle.trophyChange || "Friendlies"}\``
        if (powers.every(v => v === powers[0]) === true) trophyChange = `<:PowerPlay:707060644209491968> PP Trophies Change - \`${battles[i].battle.trophyChange || "Friendlies"}\``
        
        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`Rank ${battles[i].battle.rank}\`\n${trophyChange}\n⏱️ Duration - \`N/A\`\n🗺️ Map - \`${battles[i].event.map}\`\n\nParticipants:\n\n<:Leaderboard1:707428247532732427> - Rank 1 \n${teams[0].e1} \`${teams[0].name1}\`\n${teams[0].e2} \`${teams[0].name2}\`\n\n<:Leaderboard2:707430646926147614> - Rank 2\n${teams[1].e1} \`${teams[1].name1}\`\n${teams[1].e2} \`${teams[1].name2}\`${moreInfo}`, true)
        teams = []
      } else if (battle.event.mode === "Boss Fight") {
        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`${battles[i].battle.result}\`\n<:XP:707066788860657785> Difficulty - \`${battles[i].battle.level.name}\`\n\nParticipants:\n\n*Coming Soon...*`, true)
      } else if (battle.event.mode === "Robo Rumble") {
        embed.addField(`\`${i + 1}.\` ${emoji} ${battles[i].event.mode}`, `<:Power:707016559167668305> Result - \`${battles[i].battle.result}\`\n<:XP:707066788860657785> Difficulty - \`${battles[i].battle.level.name}\`\n\nParticipants:\n\n*Coming Soon...*`, true)
      } else embed.addField(`\`${i + 1}.\` ❓ Unknown Event`, `We sadly do not know what this event is. Is it a farily new event? Let <@262410813254402048> know!`, true)
    })
    message.channel.send(embed)
  });
    });
  });
}

exports.help = {
  name: "log"
}

exports.aliases = []
