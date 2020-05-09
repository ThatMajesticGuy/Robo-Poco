const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  const prefix = "p!"
    if (!message.member.roles.cache.has("565473889388331038") && message.author.id !== "262410813254402048") return message.channel.send(new Discord.MessageEmbed().setTitle("<:Poco:706022277090770985> Hey! You broke my guitar!").setColor("RED").setDescription("\u200b\n**You cannot run this command, as you are not a moderator!**\n\nIf anyone is breaking the rules, then please ping them!")) 
    
    let embed = new Discord.MessageEmbed()
  embed.setTitle("<:Sandy:706029248216825906> Purge Features")
  embed.setColor("4CEF8B")
  embed.addField(prefix + "purge <int>", "Purge <int> messages. If no number is provided then it defaults to 20. Discords API makes it impossible to delete messages older than 14 days.")
  embed.addField(prefix + "purge <int> <@mentions...>", "Purge <int> messages but filter by mentioned users. If no number provided defaults to 20.")
  embed.addField(prefix + "purge <int> -b", "Use the `-b` flag to only purge messages sent by bots.")
  embed.addField(prefix + "purge search <query>", "Search through the past 100 messages and purge those containing <query>")
  if (!args[0]) return message.channel.send({
    embed
  })

  if (args[0] === "search") return purgeSearch(message, bot)
  else return purge(message, bot)
}

function purgeSearch(message, bot) {

    let query = message.content.split(" ").slice(2).join(" ")

    message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Sandy:706029248216825906> `Collecting...`")).then(top => {

        message.channel.messages.fetch({limit:100}).then(msgs => {

            msgs = msgs.filter(m => m.content.includes(query) && m.id !== message.id)

            if (msgs.size < 1) return top.edit(new Discord.MessageEmbed().setColor("RED").setDescription("<:Sandy:706029248216825906> No messages were found matching the query `"+query+"`"))

            if (msgs.size === 1) return msgs.first().delete(), top.edit(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Sandy:706029248216825906> Purging 1 message matching the query `"+query+"`"))

            message.channel.bulkDelete(msgs, true).then(() => {

                top.edit(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Sandy:706029248216825906> Purging \`${msgs.size - 1}\` message matching the query \`${query}\``))
                message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Sandy:706029248216825906> Purged **${msgs.size - 1}** successfully`))


            }).catch(err => top.edit(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Sandy:706029248216825906> \`Purge Failed...\`\n\nReport this error to <@${bot.users.cache.get("262410813254402048").id}>\n\`${err}\``)))

        })
    })

}

function purge(message, bot) {

    message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription("<:Sandy:706029248216825906> `Collecting...`")).then(top => {
let args = message.content.split(' ').slice(1);

        let num = args[0] || "no"
        if (num === "no") return message.send(new Discord.MessageEmbed().setColor("RED").setDescription("<:Sandy:706029248216825906> `Not a valid number`"))
        num = parseInt(num) || 10
        if (num < 2) num = 2
        num++
        if (num > 100) num = 100
        console.log(num)

        message.channel.messages.fetch({
                limit: num
            })
            .then(msgs => {

                msgs = filter(message, msgs)

                message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Sandy:706029248216825906> \`${msgs.size - 1}\` collected. Filtering...`))
                    .then(top => {

                        if (msgs.size < 2) return top.edit(new Discord.MessageEmbed().setColor("RED").setDescription("<:Sandy:706029248216825906> `Not enough messages to purge.`"))

                        message.channel.bulkDelete(msgs, true).then(() => {
                          top.delete()
                          if (message.mentions.users.first()) message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Sandy:706029248216825906> Sucessfully purged ${msgs.size - 1}/${num - 1} messages by **${message.mentions.users.first().username}** in ${message.channel.toString()}!`).setFooter(`Purge by ${message.author.username}`, message.author.displayAvatarURL()))
                          else if (!message.mentions.users.first()) message.channel.send(new Discord.MessageEmbed().setColor("4CEF8B").setDescription(`<:Sandy:706029248216825906> Sucessfully purged ${msgs.size - 1}/${num - 1} messages in ${message.channel.toString()}!`).setFooter(`Purge by ${message.author.username}`, message.author.displayAvatarURL()))

                        }).catch(err => top.edit(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Sandy:706029248216825906> \`Purge Failed...\`\n\nReport this error to <@${bot.users.cache.get("262410813254402048").id}>\n\`${err}\``)))

                    })

            }).catch(err => top.edit(new Discord.MessageEmbed().setColor("RED").setDescription(`<:Sandy:706029248216825906> \`Purge Failed...\`\n\nReport this error to <@${bot.users.cache.get("262410813254402048").id}>\n\`${err}\``)))

    })

}

function filter(message, msgs) {

    msgs = msgs.filter(m => {

        let fail = true

        if (message.content.includes(" -b") && !m.author.bot) return false
        if (message.mentions.users.first()) {

            fail = false

            message.mentions.users.forEach(user => {

                if (m.author.id === user.id) fail = true

            })

        }

        if (fail) return true
        return false

    })

    return msgs

    
}

exports.help = {
    name: "purge",
    description: "Clears Messages",
    usage: "purge <int/@mention/all/search>"
}

exports.aliases = []