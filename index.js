const Discord = require('discord.js');

const bot = new Discord.Client()

bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection();


require('dotenv').config()

const http = require('http');
const express = require('express');
const app = express();
var server = require('http').createServer(app);

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

require("fs").readdir("./events/", (err, files) => {
  if (err) return console.error(err);

  process.stdout.write(`\n\nLoading ${files.length} Events!\n`);
  files.forEach((f, i) => {
    if (!f.endsWith(".js")) return;

    const event = require(`./events/${f}`);

    process.stdout.write(`${i + 1}: ${f} loaded!\n`);

    let eventName = f.split(".")[0];

    bot.on(eventName, event.bind(null, bot));
    delete require.cache[require.resolve(`./events/${f}`)];
  });
});

const recursive = require("recursive-readdir");

recursive("./commands/", function (err, files) {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    process.stdout.write("Do you mind making the commands first?\n".red);
    return;
  }

  process.stdout.write(`\n\nLoading ${jsfiles.length} commands!\n`);

  jsfiles.forEach((f, i) => {
    delete require.cache[require.resolve(`./${f}`)];
    let props = require(`./${f}`);
    process.stdout.write(`${i + 1}: ${f} loaded!\n`);
    bot.commands.set(props.help.name, props);
    props.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
});
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

bot.on('message', message =>{
    if (message.author.bot) return;

  if (message.channel.type === "dm") {
    return;
  }
   let prefix = "p!"
   let prefix2 = "P!"

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix) && !command.startsWith(prefix2)) return;

  let cmd = bot.commands.get(command.slice(prefix.length).toLowerCase());
  let alias = bot.aliases.get(command.slice(prefix.length).toLowerCase());
  if (cmd) {
    cmd.run(bot, message, args, prefix)
  }

      if (alias) {
        bot.commands.get(alias).run(bot, message, args, prefix)
    }
})


bot.login(process.env.BOT_TOKEN)
