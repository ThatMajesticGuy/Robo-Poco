const Discord = require("discord.js");
const key = process.env.YT_TOKEN
const yt = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(key);
const opus = require("node-opus")

exports.run = async(bot, message, args, queue) => {

  const searchString = message.content.split(" ").slice(1).join(" ")
  const url = searchString ? searchString.replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(message.guild.id);

  let voiceChannel = message.member.voiceChannel
    

  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You do not have permission to run this command")
    
    if (!voiceChannel) return message.channel.send(`You need to be in a voice channel to resume music!`) 

    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return message.channel.send('▶ Resumed the paused music for you!');
    }
    return message.channel.send("There isn't anything playing for me to resume!");

    return undefined;

    // Time for the functions

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
  name: "resume",
  description: "Continues from where you paused the music",
  usage: "resume"
}

exports.aliases = []
