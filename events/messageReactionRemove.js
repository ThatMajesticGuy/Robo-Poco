const Discord = require('discord.js');

module.exports = async (bot, reaction, user) => {
  
  const member = bot.guilds.cache.get("553949827906666499").members.cache.find(u => u.user.id === user.id)
  if (user.bot) return;
  
  if (reaction.message.channel.id === "706253846048931959") {
    
    let common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
    
    let rare = member.roles.cache.find(c => c.name === "El Primo Gang" || c.name === "Barley Gang" || c.name === "Rosa Gang")
    
    let superrare = member.roles.cache.find(c => c.name === "Rico Gang" || c.name === "Darryl Gang" || c.name === "Penny Gang" || c.name === "Carl Gang" || c.name === "Jacky Gang")
    
    let epic = member.roles.cache.find(c => c.name === "Piper Gang" || c.name === "Pam Gang" || c.name === "Frank Gang" || c.name === "Bibi Gang" || c.name === "Bea Gang")
    
    let mythic = member.roles.cache.find(c => c.name === "Mortis Gang" || c.name === "Tara Gang" || c.name === "Gene Gang" || c.name === "Max Gang" || c.name === "Mr P Gang" || c.name === "Sprout Gang")
    
    let legendary = member.roles.cache.find(c => c.name === "Spike Gang" || c.name === "Crow Gang" || c.name === "Leon Gang" || c.name === "Sandy Gang")
    
    let general = member.roles.cache.find(c => c.name.includes("Gang"))
    
    
    /*--------------------------
           Common Brawlers
    --------------------------*/
    
    if (reaction.emoji.id === "706028393803808798") {
      if (!member.roles.cache.has("706245783619633224")) return;
      await member.roles.remove("706245783619633224") // Shelly
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Shelly:706028393803808798> Sucessfully removed **Shelly Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393640230912") {
      if (!member.roles.cache.has("706245784106041385")) return;
     await member.roles.remove("706245784106041385") // Nita
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Nita:706028393640230912> Sucessfully removed **Nita Gang**!"))
    }
    
    else if (reaction.emoji.id === "706021690391396373") {
      if (!member.roles.cache.has("706245784680529931")) return;
      
      await member.roles.remove("706245784680529931") // Colt
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Colt:706021690391396373> Sucessfully removed **Colt Gang**!"))
    }
    
    else if (reaction.emoji.id === "706021690471219210") {
      if (!member.roles.cache.has("706245785351880810")) return;
      await member.roles.remove("706245785351880810") // Bull
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Bull:706021690471219210> Sucessfully removed **Bull Gang**!"))
    }
    
    else if (reaction.emoji.id === "706021690618150933") {
      if (!member.roles.cache.has("706245785544818708")) return;
      await member.roles.remove("706245785544818708") // Jessie
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Jessie:706021690618150933> Sucessfully removed **Jessie Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393568665630") {
      if (!member.roles.cache.has("706245785448218626")) return;
      await member.roles.remove("706245785448218626") //  Brock
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Brock:706028393568665630> Sucessfully removed **Brock Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393346367539") {
      if (!member.roles.cache.has("706245785913655397")) return;
      await member.roles.remove("706245785913655397") // Dynamike
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Dynamike:706028393346367539> Sucessfully removed **Dynamike Gang**!"))
    }
    
    else if (reaction.emoji.id === "706021689997393941") { 
      if (!member.roles.cache.has("706245786362576916")) return;
      await member.roles.remove("706245786362576916") // Bo
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Bo:706021689997393941> Sucessfully removed **Bo Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393761734706") {
      if (!member.roles.cache.has("706245786798653480")) return;
      await member.roles.remove("706245786798653480") // Tick
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Tick:706028393761734706> Sucessfully removed **Tick Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028391488553053") {    
      if (!member.roles.cache.has("706245787184791592")) return;
      await member.roles.remove("706245787184791592") // 8 Bit
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:8Bit:706028391488553053> Sucessfully removed **8 Bit Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393837232198") {
      if (!member.roles.cache.has("706245787482324992")) return;
      await member.roles.remove("706245787482324992") // Emz
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      common = member.roles.cache.find(c => c.name === "Shelly Gang" || c.name === "Nita Gang" || c.name === "Colt Gang" || c.name === "Bull Gang" || c.name === "Jessie Gang" || c.name === "Brock Gang" || c.name === "Dynamike Gang" || c.name === "Bo Gang" || c.name === "Tick Gang" || c.name === "8 Bit Gang" || c.name === "Emz Gang")
     
      if (!common) member.roles.remove("706245783305060455")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Emz:706028393837232198> Sucessfully removed **Emz Gang**!"))
    }
    
    /*--------------------------
           Rare Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706021690924204052") {
      if (!member.roles.cache.has("706245787780251730")) return;
      await member.roles.remove("706245787780251730") // El Primo
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      rare = member.roles.cache.find(c => c.name === "El Primo Gang" || c.name === "Barley Gang" || c.name === "Rosa Gang")
     
      if (!rare) member.roles.remove("706245787889303643")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:El_Primo:706021690924204052> Sucessfully removed **El Primo Gang**!"))
    }
    else if (reaction.emoji.id === "706028391459061781") {
      if (!member.roles.cache.has("706245787922989137")) return;
      await member.roles.remove("706245787922989137") // Barley
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      rare = member.roles.cache.find(c => c.name === "El Primo Gang" || c.name === "Barley Gang" || c.name === "Rosa Gang")
     
      if (!rare) member.roles.remove("706245787889303643")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Barley:706028391459061781> Sucessfully removed **Barley Gang**!"))
    }
    
    else if (reaction.emoji.id === "706021690966278184") {
      if (!member.roles.cache.has("706245788279504907")) return;
      await member.roles.remove("706245788279504907") // Rosa
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      rare = member.roles.cache.find(c => c.name === "El Primo Gang" || c.name === "Barley Gang" || c.name === "Rosa Gang")
     
      if (!rare) member.roles.remove("706245787889303643")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Rosa:706021690966278184> Sucessfully removed **Rosa Gang**!"))
    }
    
    /*--------------------------
         Super Rare Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706028393308618853") {
      if (!member.roles.cache.has("706245788761587733")) return;
      await member.roles.remove("706245788761587733") // Rico
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      superrare = member.roles.cache.find(c => c.name === "Rico Gang" || c.name === "Darryl Gang" || c.name === "Penny Gang" || c.name === "Carl Gang" || c.name === "Jacky Gang")
     
      if (!superrare) member.roles.remove("706245788493283359")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Rico:706028393308618853> Sucessfully removed **Rico Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393094840332") {
      if (!member.roles.cache.has("706245789403316254")) return;
      await member.roles.remove("706245789403316254") // Darryl
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      superrare = member.roles.cache.find(c => c.name === "Rico Gang" || c.name === "Darryl Gang" || c.name === "Penny Gang" || c.name === "Carl Gang" || c.name === "Jacky Gang")
     
      if (!superrare) member.roles.remove("706245788493283359")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Darryl:706028393094840332> Sucessfully removed **Darryl Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393501818956") {
      if (!member.roles.cache.has("706245789449715804")) return;
      await member.roles.remove("706245789449715804") // Penny
      
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      superrare = member.roles.cache.find(c => c.name === "Rico Gang" || c.name === "Darryl Gang" || c.name === "Penny Gang" || c.name === "Carl Gang" || c.name === "Jacky Gang")
     
      if (!superrare) member.roles.remove("706245788493283359")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Penny:706028393501818956> Sucessfully removed **Penny Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393426321519") {
      if (!member.roles.cache.has("706245789709631509")) return;
      await member.roles.remove("706245789709631509") // Carl
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      superrare = member.roles.cache.find(c => c.name === "Rico Gang" || c.name === "Darryl Gang" || c.name === "Penny Gang" || c.name === "Carl Gang" || c.name === "Jacky Gang")
     
      if (!superrare) member.roles.remove("706245788493283359")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Carl:706028393426321519> Sucessfully removed **Carl Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393837363250") {
      if (!member.roles.cache.has("706245790368137338")) return;
      await member.roles.remove("706245790368137338") // Jacky
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      superrare = member.roles.cache.find(c => c.name === "Rico Gang" || c.name === "Darryl Gang" || c.name === "Penny Gang" || c.name === "Carl Gang" || c.name === "Jacky Gang")
     
      if (!superrare) member.roles.remove("706245788493283359")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Jacky:706028393837363250> Sucessfully removed **Jacky Gang**!"))
    }
    
    /*--------------------------
           Epic Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706028393505882133") {
      if (!member.roles.cache.has("706245790611406972")) return;
      await member.roles.remove("706245790611406972") // Piper
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      epic = member.roles.cache.find(c => c.name === "Piper Gang" || c.name === "Pam Gang" || c.name === "Frank Gang" || c.name === "Bibi Gang" || c.name === "Bea Gang")
     
      if (!epic) member.roles.remove("706245790171136062")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Piper:706028393505882133> Sucessfully removed **Piper Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393585705030") {
      if (!member.roles.cache.has("706245791148408852")) return;
      await member.roles.remove("706245791148408852") // Pam
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      epic = member.roles.cache.find(c => c.name === "Piper Gang" || c.name === "Pam Gang" || c.name === "Frank Gang" || c.name === "Bibi Gang" || c.name === "Bea Gang")
     
      if (!epic) member.roles.remove("706245790171136062")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Pam:706028393585705030> Sucessfully removed **Pam Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393275326485") {
      if (!member.roles.cache.has("706245791525896272")) return;
      await member.roles.remove("706245791525896272") // Frank
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      epic = member.roles.cache.find(c => c.name === "Piper Gang" || c.name === "Pam Gang" || c.name === "Frank Gang" || c.name === "Bibi Gang" || c.name === "Bea Gang")
     
      if (!epic) member.roles.remove("706245790171136062")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Frank:706028393275326485> Sucessfully removed **Frank Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028391987413074") {
      if (!member.roles.cache.has("706245791773360138")) return;
      await member.roles.remove("706245791773360138") // Bibi
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      epic = member.roles.cache.find(c => c.name === "Piper Gang" || c.name === "Pam Gang" || c.name === "Frank Gang" || c.name === "Bibi Gang" || c.name === "Bea Gang")
     
      if (!epic) member.roles.remove("706245790171136062")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Bibi:706028391987413074> Sucessfully removed **Bibi Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028391924498502") {
      if (!member.roles.cache.has("706245791811108866")) return;
      await member.roles.remove("706245791811108866") // Bea
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      epic = member.roles.cache.find(c => c.name === "Piper Gang" || c.name === "Pam Gang" || c.name === "Frank Gang" || c.name === "Bibi Gang" || c.name === "Bea Gang")
     
      if (!epic) member.roles.remove("706245790171136062")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Bea:706028391924498502> Sucessfully removed **Bea Gang**!"))
    }
    
    /*--------------------------
           Mythic Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706021690399916133") {
      if (!member.roles.cache.has("706245792171556986")) return;
      await member.roles.remove("706245792171556986") // Mortis
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      mythic = member.roles.cache.find(c => c.name === "Mortis Gang" || c.name === "Tara Gang" || c.name === "Gene Gang" || c.name === "Max Gang" || c.name === "Mr P Gang" || c.name === "Sprout Gang")
     
      if (!mythic) member.roles.remove("706245792108773547")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Mortis:706021690399916133> Sucessfully removed **Mortis Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393757540392") { 
      if (!member.roles.cache.has("706245792817610832")) return;
      await member.roles.remove("706245792817610832") // Tara
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      mythic = member.roles.cache.find(c => c.name === "Mortis Gang" || c.name === "Tara Gang" || c.name === "Gene Gang" || c.name === "Max Gang" || c.name === "Mr P Gang" || c.name === "Sprout Gang")
     
      if (!mythic) member.roles.remove("706245792108773547")
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Tara:706028393757540392> Sucessfully removed **Tara Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393568927845") {
      if (!member.roles.cache.has("706245794231222365")) return;
      await member.roles.remove("706245794231222365") // Gene
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      mythic = member.roles.cache.find(c => c.name === "Mortis Gang" || c.name === "Tara Gang" || c.name === "Gene Gang" || c.name === "Max Gang" || c.name === "Mr P Gang" || c.name === "Sprout Gang")
     
      if (!mythic) member.roles.remove("706245792108773547")
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Gene:706028393568927845> Sucessfully removed **Gene Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393866723338") {
      if (!member.roles.cache.has("706251775253938217")) return;
      await member.roles.remove("706251775253938217") // Max
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      mythic = member.roles.cache.find(c => c.name === "Mortis Gang" || c.name === "Tara Gang" || c.name === "Gene Gang" || c.name === "Max Gang" || c.name === "Mr P Gang" || c.name === "Sprout Gang")
     
      if (!mythic) member.roles.remove("706245792108773547")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Max:706028393866723338> Sucessfully removed **Max Gang**!"))
    }
    
    else if (reaction.emoji.id === "706021690551042052") {
      if (!member.roles.cache.has("706245794256388198")) return;
      await member.roles.remove("706245794256388198") // Mr P
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      mythic = member.roles.cache.find(c => c.name === "Mortis Gang" || c.name === "Tara Gang" || c.name === "Gene Gang" || c.name === "Max Gang" || c.name === "Mr P Gang" || c.name === "Sprout Gang")
     
      if (!mythic) member.roles.remove("706245792108773547")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:MrP:706021690551042052> Sucessfully removed **Mr. P Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028393132458025") {
      if (!member.roles.cache.has("706245794927345794")) return;
      await member.roles.remove("706245794927345794") // Sprout
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      mythic = member.roles.cache.find(c => c.name === "Mortis Gang" || c.name === "Tara Gang" || c.name === "Gene Gang" || c.name === "Max Gang" || c.name === "Mr P Gang" || c.name === "Sprout Gang")
     
      if (!mythic) member.roles.remove("706245792108773547")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Sprout:706028393132458025> Sucessfully removed **Sprout Gang**!"))
    }
    
    /*--------------------------
         Legendary Brawlers
    --------------------------*/
    
    else if (reaction.emoji.id === "706028970117693440") {
      if (!member.roles.cache.has("706245795409559572")) return;
      await member.roles.remove("706245795409559572") // Spike
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      legendary = member.roles.cache.find(c => c.name === "Spike Gang" || c.name === "Crow Gang" || c.name === "Leon Gang" || c.name === "Sandy Gang")
     
      if (!legendary) member.roles.remove("706245795157901312")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Spike:706028970117693440> Sucessfully removed **Spike Gang**!"))
    }
    
    else if (reaction.emoji.id === "706029042884804629") {
      if (!member.roles.cache.has("706245795514417203")) return;
      await member.roles.remove("706245795514417203") // Crow
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      legendary = member.roles.cache.find(c => c.name === "Spike Gang" || c.name === "Crow Gang" || c.name === "Leon Gang" || c.name === "Sandy Gang")
     
      if (!legendary) member.roles.remove("706245795157901312")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Crow:706029042884804629> Sucessfully removed **Crow Gang**!"))
    }
    
    else if (reaction.emoji.id === "706028858368852060") {
      if (!member.roles.cache.has("706245795921395794")) return;
      await member.roles.remove("706245795921395794") // Leon
      
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      legendary = member.roles.cache.find(c => c.name === "Spike Gang" || c.name === "Crow Gang" || c.name === "Leon Gang" || c.name === "Sandy Gang")
     
      if (!legendary) member.roles.remove("706245795157901312")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Leon:706028858368852060> Sucessfully removed **Leon Gang**!"))
    }
    
    else if (reaction.emoji.id === "706029248216825906") {
      if (!member.roles.cache.has("706245796278042634")) return;
      await member.roles.remove("706245796278042634") // Sandy
      general = member.roles.cache.find(c => c.name.endsWith("Gang"))
      
      if (!general) member.roles.remove("706245782742761515")
      
      legendary = member.roles.cache.find(c => c.name === "Spike Gang" || c.name === "Crow Gang" || c.name === "Leon Gang" || c.name === "Sandy Gang")

      if (!legendary) member.roles.remove("706245795157901312")
      
      user.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Sandy:706029248216825906> Sucessfully removed **Sandy Gang**!"))
    }
    
    else return;
  }
}