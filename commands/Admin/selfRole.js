const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (message.author.id !== '262410813254402048') return;
  const channel = bot.channels.cache.get("706017850527318028")
  console.log("hi")
  
  const explain = new Discord.MessageEmbed()
  .setColor("#FF4500")
  .setTitle("Welcome to Self Roles!")
  .setDescription("Here, you can add your favorite brawler as a role, to support them!\n\nYou have to wait **3 seconds** in between adding roles, and there is a limit of **5 brawlers**, so watch out!\n\nJust react with the brawler's icon to add the role to yourself!")
  message.channel.send(explain)
  const embed = new Discord.MessageEmbed()
  .setColor('e5e5e5')
  .setDescription(`Support your **Common Brawler** Gang!\n\n---------------------------------------\n\n<:Shelly:706028393803808798> - **Shelly**\n\n<:Nita:706028393640230912> - **Nita**\n\n<:Colt:706021690391396373> - **Colt**\n\n<:Bull:706021690471219210> - **Bull**\n\n<:Jessie:706021690618150933> - **Jessie**\n\n<:Brock:706028393568665630> - **Brock**\n\n<:Dynamike:706028393346367539> - **Dynamike**\n\n<:Bo:706021689997393941> - **Bo**\n\n<:Tick:706028393761734706> - **Tick**\n\n<:8Bit:706028391488553053> - **8-Bit**\n\n<:Emz:706028393837232198> - **Emz**`)
  
  const embed2 = new Discord.MessageEmbed()
  .setDescription(`Support your **Common Brawler** Gang!\n\n---------------------------------------------`)
  .setColor("e5e5e5")
  .addField("\u200b", "<:Shelly:706028393803808798> - **Shelly**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Nita:706028393640230912> - **Nita**", true)
  .addField("\u200b", "<:Colt:706021690391396373> - **Colt**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Bull:706021690471219210> - **Bull**", true)
  .addField("\u200b", "<:Jessie:706021690618150933> - **Jessie**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Brock:706028393568665630> - **Brock**", true)
  .addField("\u200b", "<:Dynamike:706028393346367539> - **Dynamike**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Bo:706021689997393941> - **Bo**", true)
  .addField("\u200b", "<:Tick:706028393761734706> - **Tick**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:8Bit:706028391488553053> - **8 Bit**", true)
  .addField("\u200b", "<:Emz:706028393837232198> - **Emz**", true)
  const msg = await message.channel.send(embed2)
  msg.react('706028393803808798').then(() => msg.react("706028393640230912").then(() => msg.react("706021690391396373").then(() => msg.react("706021690471219210").then(() => msg.react("706021690618150933").then(() => msg.react("706028393568665630").then(() => msg.react("706028393346367539").then(() => msg.react("706021689997393941").then(() => msg.react("706028393761734706").then(() => msg.react("706028391488553053").then(() => msg.react("706028393837232198")))))))))))
  
  const rare = new Discord.MessageEmbed()
  .setColor("00FF00")
  .setDescription("Support your **Rare** Brawler Gang!\n\n---------------------------------------------")
  .addField("\u200b", "<:El_Primo:706021690924204052> - **El Primo**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Barley:706028391459061781> - **Barley**", true)
  .addField("\u200b", "<:Rosa:706021690966278184> - **Rosa**", true)
  const rareMsg = await message.channel.send(rare)
  rareMsg.react("706021690924204052").then(() => rareMsg.react("706028391459061781").then(() => rareMsg.react("706021690966278184")))
  
  const superrare = new Discord.MessageEmbed()
  .setColor("455DFA")
  .setDescription("Support your **Super Rare** Brawler Gang!\n\n---------------------------------------------")
  .addField("\u200b", "<:Rico:706028393308618853> - **Rico**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Darryl:706028393094840332> - **Darryl**", true)
  .addField("\u200b", "<:Penny:706028393501818956>  - **Penny**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Carl:706028393426321519> - **Carl**", true)
  .addField("\u200b", "<:Jacky:706028393837363250>  - **Jacky**", true)
  const superMsg = await message.channel.send(superrare)
  superMsg.react("706028393308618853").then(() => superMsg.react("706028393094840332").then(() => superMsg.react("706028393501818956").then(() => superMsg.react("706028393426321519").then(() => superMsg.react("706028393837363250")))))
  
  const epic = new Discord.MessageEmbed()
  .setColor("7F00FF")
  .setDescription("Support your **Epic** Brawler Gang!\n\n---------------------------------------------")
  .addField("\u200b", "<:Piper:706028393505882133> - **Piper**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Pam:706028393585705030> - **Pam**", true)
  .addField("\u200b", "<:Frank:706028393275326485> - **Frank**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Bibi:706028391987413074> - **Bibi**", true)
  .addField("\u200b", "<:Bea:706028391924498502> - **Bea**", true)
  const epicMsg = await message.channel.send(epic)
  epicMsg.react("706028393505882133").then(() => epicMsg.react("706028393585705030").then(() => epicMsg.react("706028393275326485").then(() => epicMsg.react("706028391987413074").then(() => epicMsg.react("706028391924498502")))))
  
  const mythic = new Discord.MessageEmbed()
  .setColor("FF0000")
  .setDescription("Support your **Mythic** Brawler Gang!\n\n---------------------------------------------")
  .addField("\u200b", "<:Mortis:706021690399916133> - **Mortis**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Tara:706028393757540392> - **Tara**", true)
  .addField("\u200b", "<:Gene:706028393568927845> - **Gene**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Max:706028393866723338> - **Max**", true)
  .addField("\u200b", "<:MrP:706021690551042052> - **Mr. P**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Sprout:706028393132458025> - **Sprout**", true)
  const mythicMsg = await message.channel.send(mythic)
  mythicMsg.react("706021690399916133").then(() => mythicMsg.react("706028393757540392").then(() => mythicMsg.react("706028393568927845").then(() => mythicMsg.react("706028393866723338").then(() => mythicMsg.react("706021690551042052").then(() => mythicMsg.react("706028393132458025"))))))
  
  const legendary = new Discord.MessageEmbed()
  .setColor("#FFFF00")
  .setDescription("Support your **Legendary** Brawler Gang!\n\n---------------------------------------------")
  .addField("\u200b", "<:Spike:706028970117693440> - **Spike**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Crow:706029042884804629> - **Crow**", true)
  .addField("\u200b", "<:Leon:706028858368852060> - **Leon**", true)
  .addField('\u200b', "\u200b", true)
  .addField("\u200b", "<:Sandy:706029248216825906> - **Sandy**", true)
  const legMsg = await message.channel.send(legendary)
  legMsg.react("706028970117693440").then(() => legMsg.react("706029042884804629").then(() => legMsg.react("706028858368852060").then(() => legMsg.react("706029248216825906"))))
  message.channel.send(explain)
}

exports.help = {
  name: "selfRole",
  category: "Administrator"
}

exports.aliases = []