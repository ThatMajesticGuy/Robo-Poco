const Discord = require("discord.js");
const opus = require("node-opus");
const key = process.env.YT_TOKEN
const yt = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(key);


exports.run = async(bot, message, args, queue) => {

  const searchString = message.content.split(" ").slice(1).join(" ")
  const url = searchString ? searchString.replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(message.guild.id);

    if (!serverQueue) return message.channel.send(`There is nothing playing! Add some music to play using: p!play [song-name]`);


    const queueInfo = new Discord.RichEmbed()
    .setTitle("Song Queue")
    .setDescription(`**Currently Playing: [${Discord.escapeMarkdown(serverQueue.songs[0].title)}](${serverQueue.songs[0].url})\n(\`${serverQueue.songs[0].time} | Requested by ${Discord.escapeMarkdown(bot.users.get(serverQueue.songs[0].requester).username)}\`)\n**\n\n${serverQueue.songs.map((song, i) => `${i} - [${song.title}](${song.url})\n(\`${song.time} | Requested by ${bot.users.get(song.requester).username}\`)\n`).slice(1, 10).join('\n')}`)
    .setColor("#503d82")
    if (serverQueue.songs.length > 10) queueInfo.setFooter(`And ${serverQueue.songs.length - 10} more`)
    return message.channel.send({embed: queueInfo});

    // > Functions

async function handleVideo(video, message, voiceChannel, playlist = false) {
  const serverQueue = queue.get(message.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    thumbnail: video.thumbnails.high.url,
    duration: `${video.duration.hours} hours, ${video.duration.minutes} minutes, and ${video.duration.seconds} seconds long`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      skippers: [],
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send(`I could not join the voice channel: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

const dispatcher = serverQueue.connection.playStream(yt(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            setTimeout(() => {
                play(guild, serverQueue.songs[0]);
            }, 250);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}
};


exports.help = {
    name: "queue",
    description: "Shows what music is in the queue",
    usage: "queue"
}

exports.aliases = []
