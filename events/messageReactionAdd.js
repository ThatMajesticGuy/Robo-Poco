const Discord = require('discord.js');
const cooldown = new Set();
const cooldown2 = new Set();
module.exports = (bot, reaction, user) => {
  
  const member = bot.guilds.cache.get("553949827906666499").members.cache.find(u => u.user.id === user.id)
  if (user.bot) return;
  if (reaction.emoji.id === "706022277090770985" && reaction.message.channel.id === "706306728144404620") {
    if (member.roles.cache.has("566636262065176588")) return;
    member.roles.add("566636262065176588")
  
  const welcome = bot.channels.cache.get("566606546352472064")
  const embed = new Discord.MessageEmbed()
  .setColor("4CEF8B")
  .setThumbnail(user.displayAvatarURL())
  .setDescription(`Hello **${user.username}**! Welcome to PocoGang!\n\nGo to <#566242532531634186> for any updates on PocoGang!\nGo to <#566580925677436929> to check out the rules!\n\nWe hope you enjoy PocoGang!`)
  welcome.send(`${user}`, embed)
  }
  
  
  if (reaction.message.channel.id === "706253846048931959") {
    if (member.roles.cache.filter(r => r.name.endsWith("Gang")).size === 5) return user.send(new Discord.MessageEmbed().setColor("RED").setDescription("You are at the limit of **5 Gangs!**"))
    if (cooldown.has(user.id)) {
      reaction.users.remove(user.id)
      if (cooldown2.has(user.id)) return;
      if (!cooldown2.has(user.id)) {
cooldown2.add(user.id);
setTimeout(() => {
  cooldown2.delete(user.id)
}, 3000);
}
      return user.send(new Discord.MessageEmbed().setColor("RED").setDescription("You are on cooldown! Please wait **3 seconds** to react again!"))
    }
    
    if (!cooldown.has(user.id)) {
cooldown.add(user.id);
setTimeout(() => {
  cooldown.delete(user.id)
}, 3000);
}
    /*--------------------------
           Common Brawlers
    --------------------------*/
    
    if (reaction.emoji.id === "706028393803808798") {
      if(member.roles.cache.has("706245783619633224")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245783619633224") // Shelly
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Shelly:706028393803808798> Sucessfully added **Shelly Gang**!"))
    }
    else if (reaction.emoji.id === "706028393640230912") {
      if(member.roles.cache.has("706245784106041385")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245784106041385") // Nita
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Nita:706028393640230912> Sucessfully added **Nita Gang**!"))
    }
    else if (reaction.emoji.id === "706021690391396373") {
      if(member.roles.cache.has("706245784680529931")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245784680529931") // Colt
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Colt:706021690391396373> Sucessfully added **Colt Gang**!"))
    }
    else if (reaction.emoji.id === "706021690471219210") { 
      if(member.roles.cache.has("706245785351880810")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245785351880810") // Bull
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Bull:706021690471219210> Sucessfully added **Bull Gang**!"))
    }
    else if (reaction.emoji.id === "706021690618150933") {
      if(member.roles.cache.has("706245785544818708")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245785544818708") // Jessie
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Jessie:706021690618150933> Sucessfully added **Jessie Gang**!"))
    }
    else if (reaction.emoji.id === "706028393568665630") {
      if(member.roles.cache.has("706245785448218626")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245785448218626") //  Brock
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Brock:706028393568665630> Sucessfully added **Brock Gang**!"))
    }
    else if (reaction.emoji.id === "706028393346367539") {
      if(member.roles.cache.has("706245785913655397")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245785913655397") // Dynamike
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Dynamike:706028393346367539> Sucessfully added **Dynamike Gang**!"))
    }
    else if (reaction.emoji.id === "706021689997393941") {
      if(member.roles.cache.has("706245786362576916")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245786362576916") // Bo
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Bo:706021689997393941> Sucessfully added **Bo Gang**!"))
    }
    else if (reaction.emoji.id === "706028393761734706") {
      if(member.roles.cache.has("706245786798653480")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245786798653480") // Tick
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Tick:706028393761734706> Sucessfully added **Tick Gang**!"))
    }
    else if (reaction.emoji.id === "706028391488553053") {
      if(member.roles.cache.has("706245787184791592")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245787184791592") // 8 Bit
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:8Bit:706028391488553053> Sucessfully added **8 Bit Gang**!"))
    }
    else if (reaction.emoji.id === "706028393837232198") {
      if(member.roles.cache.has("706245787482324992")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245783305060455")) member.roles.add("706245783305060455")
      
      member.roles.add("706245787482324992") // Emz
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Emz:706028393837232198> Sucessfully added **Emz Gang**!"))
    }
    
    /*--------------------------
           Rare Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706021690924204052") {
      if(member.roles.cache.has("706245787780251730")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245787889303643")) member.roles.add("706245787889303643")
      
      member.roles.add("706245787780251730") // El Primo
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:El_Primo:706021690924204052> Sucessfully added **El Primo Gang**!"))
    }
    else if (reaction.emoji.id === "706028391459061781") {
      if(member.roles.cache.has("706245787922989137")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245787889303643")) member.roles.add("706245787889303643")
      
      member.roles.add("706245787922989137") // Barley
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Barley:706028391459061781> Sucessfully added **Barley Gang**!"))
    }
    
    else if (reaction.emoji.id === "707124347424211010") {
      if(member.roles.cache.has("706245788279504907")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245787889303643")) member.roles.add("706245787889303643")
      
      member.roles.add("706245788279504907") // Rosa
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Rosa:707124347424211010> Sucessfully added **Rosa Gang**!"))
    }
    
    /*--------------------------
         Super Rare Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706028393308618853") {
      if(member.roles.cache.has("706245788761587733")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245788493283359")) member.roles.add("706245788493283359")
      
      member.roles.add("706245788761587733") // Rico
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Rico:706028393308618853> Sucessfully added **Rico Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393094840332") {
      if(member.roles.cache.has("706245789403316254")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245788493283359")) member.roles.add("706245788493283359")
      
      member.roles.add("706245789403316254") // Darryl
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Darryl:706028393094840332> Sucessfully added **Darryl Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393501818956") {
      if(member.roles.cache.has("706245789449715804")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245788493283359")) member.roles.add("706245788493283359")
      
      member.roles.add("706245789449715804") // Penny
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Penny:706028393501818956> Sucessfully added **Penny Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393426321519") {
      if(member.roles.cache.has("706245789709631509")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245788493283359")) member.roles.add("706245788493283359")
      
      member.roles.add("706245789709631509") // Carl
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Carl:706028393426321519> Sucessfully added **Carl Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393837363250") {
      if(member.roles.cache.has("706245790368137338")) return;
      
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245788493283359")) member.roles.add("706245788493283359")
      
      member.roles.add("706245790368137338") // Jacky
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Jacky:706028393837363250> Sucessfully added **Jacky Gang**!"))
    }
    
    /*--------------------------
           Epic Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706028393505882133") {
      if(member.roles.cache.has("706245790611406972")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245790171136062")) member.roles.add("706245790171136062")
      
      member.roles.add("706245790611406972") // Piper
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Piper:706028393505882133> Sucessfully added **Piper Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393585705030") {
      if(member.roles.cache.has("706245791148408852")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245790171136062")) member.roles.add("706245790171136062")
      
      member.roles.add("706245791148408852") // Pam
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Pam:706028393585705030> Sucessfully added **Pam Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393275326485") {
      if(member.roles.cache.has("706245791525896272")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245790171136062")) member.roles.add("706245790171136062")
      
      member.roles.add("706245791525896272") // Frank
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Frank:706028393275326485> Sucessfully added **Frank Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028391987413074") {
      if(member.roles.cache.has("706245791773360138")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245790171136062")) member.roles.add("706245790171136062")
      
      member.roles.add("706245791773360138") // Bibi
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Bibi:706028391987413074> Sucessfully added **Bibi Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028391924498502") {
      if(member.roles.cache.has("706245791811108866")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245790171136062")) member.roles.add("706245790171136062")
      
      member.roles.add("706245791811108866") // Bea
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Bea:706028391924498502> Sucessfully added **Bea Gang**!"))
    }
    
    /*--------------------------
           Mythic Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706021690399916133") {
      if(member.roles.cache.has("706245792171556986")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245792108773547")) member.roles.add("706245792108773547")
      
      member.roles.add("706245792171556986") // Mortis
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Mortis:706021690399916133> Sucessfully added **Mortis Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393757540392") {
      if(member.roles.cache.has("706245792817610832")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245792108773547")) member.roles.add("706245792108773547")
      
      member.roles.add("706245792817610832") // Tara
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Tara:706028393757540392> Sucessfully added **Tara Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393568927845") {
      if(member.roles.cache.has("706245794231222365")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245792108773547")) member.roles.add("706245792108773547")
      
      member.roles.add("706245794231222365") // Gene
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Gene:706028393568927845> Sucessfully added **Gene Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393866723338") {
      if(member.roles.cache.has("706251775253938217")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245792108773547")) member.roles.add("706245792108773547")
      
      member.roles.add("706251775253938217") // Max
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Max:706028393866723338> Sucessfully added **Max Gang**!"))
    }
    
    else if (reaction.emoji.id === "706021690551042052") {
      if(member.roles.cache.has("706245794256388198")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245792108773547")) member.roles.add("706245792108773547")
      
      member.roles.add("706245794256388198") // Mr P
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:MrP:706021690551042052> Sucessfully added **Mr. P Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393132458025") {
      if(member.roles.cache.has("706245794927345794")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245792108773547")) member.roles.add("706245792108773547")
      
      member.roles.add("706245794927345794") // Sprout
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Sprout:706028393132458025> Sucessfully added **Sprout Gang**!"))
    }
    
    /*--------------------------
         Legendary Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706028970117693440") {
      if(member.roles.cache.has("706245795409559572")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245795157901312")) member.roles.add("706245795157901312")
      
      member.roles.add("706245795409559572") // Spike
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Spike:706028970117693440> Sucessfully added **Spike Gang**!"))
    }
    
    else if (reaction.emoji.id === "706029042884804629") {
      if(member.roles.cache.has("706245795514417203")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245795157901312")) member.roles.add("706245795157901312")
      
      member.roles.add("706245795514417203") // Crow
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Crow:706029042884804629> Sucessfully added **Crow Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028858368852060") {
      if(member.roles.cache.has("706245795921395794")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245795157901312")) member.roles.add("706245795157901312")
      
      member.roles.add("706245795921395794") // Leon
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Leon:706028858368852060> Sucessfully added **Leon Gang**!"))
    }
    
    else if (reaction.emoji.id === "706029248216825906") {
      if(member.roles.cache.has("706245796278042634")) return;
      if (!member.roles.cache.has("706245782742761515")) member.roles.add("706245782742761515")
      if (!member.roles.cache.has("706245795157901312")) member.roles.add("706245795157901312")
      
      member.roles.add("706245796278042634") // Sandy
      user.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Sandy:706029248216825906> Sucessfully added **Sandy Gang**!"))
    }
    
    else return;
  }
}