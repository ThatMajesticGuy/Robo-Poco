const Discord = require('discord.js');

const Brawlstars = require("brawlstars.js")
const token = process.env.BS_KEY
const client = new Brawlstars.Client(token)

exports.run = (bot, message, args) => {
  if (message.channel.id !== "707127658911236126") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> You are not in the right channel! Go to <#707127658911236126> to use this command!"))
  let region = '' 
  if (args[0]) region = args[0].toUpperCase()
  else region = "GLOBAL"
  if (region === "GLOBAL") region = "global"
  client.getRanking(region, 'players').then(async players => {
    const global = await client.getRanking('global', 'players')

    if (args[0] && args[0].length !== 2) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> That is not a valid Country Name. Please format it using the 2 Letter Country Code.\n\nExamples: :flag_us: - `US`\n:flag_fr: - `FR`\n:flag_ca: - `CA`"))
    if (region === "global") region = "Global"
    const embed = new Discord.MessageEmbed()
    .setTitle(`Top 10 Players in ${region}`)
    .setColor("4CEF8B")
    .addField("<:Leaderboard1:707428247532732427>", `<:Owner:707385123527589969> - \`${players.ranks[0].name} (${players.ranks[0].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[0].trophies.toLocaleString()}\``, true)
    .addField("<:Leaderboard2:707430646926147614>", `<:Owner:707385123527589969> - \`${players.ranks[1].name} (${players.ranks[1].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[1].trophies.toLocaleString()}\``, true)
    .addField("\u200b", "\u200b")
    .addField("<:Leaderboard3:707431877992251453>", `<:Owner:707385123527589969> - \`${players.ranks[2].name} (${players.ranks[2].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[2].trophies.toLocaleString()}\``, true)
    .addField("<:Leaderboard4:707327422349180938>", `<:Owner:707385123527589969> - \`${players.ranks[3].name} (${players.ranks[3].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[3].trophies.toLocaleString()}\``, true)
    .addField("\u200b", "\u200b")
    .addField("<:Leaderboard5:707327422420484211>", `<:Owner:707385123527589969> - \`${players.ranks[4].name} (${players.ranks[4].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[4].trophies.toLocaleString()}\``, true)
    .addField("<:Leaderboard6:707327422349049997>", `<:Owner:707385123527589969> - \`${players.ranks[5].name} (${players.ranks[5].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[5].trophies.toLocaleString()}\``, true)
    .addField("\u200b", "\u200b")
    .addField("<:Leaderboard7:707327422261100556>", `<:Owner:707385123527589969> - \`${players.ranks[6].name} (${players.ranks[6].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[6].trophies.toLocaleString()}\``, true)
    .addField("<:Leaderboard8:707327422386667590>", `<:Owner:707385123527589969> - \`${players.ranks[7].name} (${players.ranks[7].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[7].trophies.toLocaleString()}\``, true)
    .addField("\u200b", "\u200b")
    .addField("<:Leaderboard9:707450211991027713>", `<:Owner:707385123527589969> - \`${players.ranks[8].name} (${players.ranks[8].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[8].trophies.toLocaleString()}\``, true)
    .addField("<:Leaderboard10:707449718069788743>", `<:Owner:707385123527589969> - \`${players.ranks[9].name} (${players.ranks[9].tag})\`\n<:Trophies:707016913372577812> - \`${players.ranks[9].trophies.toLocaleString()}\``, true)
    message.channel.send(embed)
  }).catch(err => message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> That is not a valid Country Name. Please format it using the 2 Letter Country Code.\n\nExamples: :flag_us: - `US`\n:flag_fr: - `FR`\n:flag_ca: - `CA`")))
}

exports.help = {
  name: "top10",
  description: "Gives the Top 10 Players",
  usage: 'top10 <2 Letter Country Code>',
  category: "Brawl Stars"
}

exports.aliases = []