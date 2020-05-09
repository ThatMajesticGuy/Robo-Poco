const Discord = require('discord.js');

exports.run = (bot, message, args)  => {
  if (message.author.id !== '262410813254402048') return;
  const general = {data: {name: "{-----GANGS-----}", color: "4CEF8B"}}
  const common = {data: {name: "{----COMMON BRAWLERS----}", color: "GREY"}}
  
  const shelly = {data: {name: "Shelly Gang", color: "GREY"}}
  const nita = {data: {name: "Nita Gang", color: "GREY"}}
  const colt = {data: {name: "Colt Gang", color: "GREY"}}
  const bull = {data: {name: "Bull Gang", color: "GREY"}}
  const jessie = {data: {name: "Jessie Gang", color: "GREY"}}
  const brock = {data: {name: "Brock Gang", color: "GREY"}}
  const dyna = {data: {name: "Dynamike Gang", color: "GREY"}}
  const bo = {data: {name: "Bo Gang", color: "GREY"}}
  const tick = {data: {name: "Tick Gang", color: "GREY"}}
  const bit = {data: {name: "8 Bit Gang", color: "GREY"}}
  const emz = {data: {name: "Emz Gang", color: "GREY"}}
  
  const rare = {data: {name: "{----RARE BRAWLERS----}", color: "GREEN"}}
  const primo = {data: {name: "El Primo Gang", color: "GREEN"}}
  const barley = {data: {name: "Barley Gang", color: "GREEN"}}
  const rosa = {data: {name: "Rosa Gang", color: "GREEN"}}
  
  const superrare = {data: {name: "{----SUPER RARE BRAWLERS----}", color: "455DFA"}}
  const rico = {data: {name: "Rico Gang", color: "455DFA"}}
  const darryl = {data: {name: "Darryl Gang", color: "455DFA"}}
  const penny = {data: {name: "Penny Gang", color: "455DFA"}}
  const carl = {data: {name: "Carl Gang", color: "455DFA"}}
  const jacky = {data: {name: "Jacky Gang", color: "455DFA"}}
  
  const epic = {data: {name: "{----EPIC BRAWLERS----}", color: "PURPLE"}}
  const piper = {data: {name: "Piper Gang", color: "PURPLE"}}
  const pam = {data: {name: "Pam Gang", color: "PURPLE"}}
  const frank = {data: {name: "Frank Gang", color: "PURPLE"}}
  const bibi = {data: {name: "Bibi Gang", color: "PURPLE"}}
  const bea = {data: {name: "Bea Gang", color: "PURPLE"}}
  
  const mythic = {data: {name: "{----MYTHIC BRAWLERS----}", color: "RED"}}
  const mortis = {data: {name: "Mortis Gang", color: "RED"}}
  const tara = {data: {name: "Tara Gang", color: "RED"}}
  const gene = {data: {name: "Gene Gang", color: "RED"}}
  const max = {data: {name: "Sprout Gang", color: "RED"}}
  const mrp = {data: {name: "Mr P Gang", color: "RED"}}
  const sprout = {data: {name: "Sprout Gang", color: "RED"}}
  
  const legendary = {data: {name: "{----LEGENDARY BRAWLERS----}", color: "YELLOW"}}
  const spike = {data: {name: "Spike Gang", color: "YELLOW"}}
  const crow = {data: {name: "Crow Gang", color: "YELLOW"}}
  const leon = {data: {name: "Leon Gang", color: "YELLOW"}}
  const sandy = {data: {name: "Sandy Gang", color: "YELLOW"}}
  
  let arr = [general, common, shelly, nita, colt, bull, jessie, brock, dyna, bo, tick, bit, emz, rare, primo, barley, rosa, superrare, rico, darryl, penny, carl, jacky, epic, piper, pam, frank, bibi, bea, mythic, mortis, tara, gene, max, mrp, sprout, legendary, spike, crow, leon, sandy]
  
  arr.forEach(role => {
    setTimeout(function () {message.guild.roles.create(role) }, 2000)
  })
  message.channel.send("Created all the roles!")
}

exports.help = {
  name: "createRoles",
  category: "Administrator"
}

exports.aliases = []