const Discord = require('discord.js');

const getDefaultChannel = guild => {
  if (guild.channels.cache.has(guild.id)) return guild.channels.get(guild.id);

  const generalChannel = guild.channels.cache.find(
    channel => channel.name === "general"
  );
  if (generalChannel) return generalChannel;
  return guild.channels.cache
    .filter(
      c =>
        c.type === "text" &&
        c.permissionsFor(guild.client.user).has("SEND_MESSAGES")
    )
    .sort(
      (a, b) =>
        a.position - b.position ||
        Long.fromString(a.id)
          .sub(Long.fromString(b.id))
          .toNumber()
    )
    .first();
};

module.exports = (bot, guild) => {
  if (guild.id === "553949827906666499" || guild.id === "705984076871368715" || guild.id === "707060962347450389") return
  const channel = getDefaultChannel(guild)
  const embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Uh oh...")
  .setDescription("It seems like you tried to invite Poco Bot in a server that was not Poco Gang... I sadly cannot be here... Sayonara...")
  channel.send(embed).then(() => guild.leave())
}