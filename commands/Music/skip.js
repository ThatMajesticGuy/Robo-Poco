const Discord = require("discord.js");
const yt = require('ytdl-core');
const key = process.env.YT_TOKEN
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(key);
const opus = require("node-opus");


exports.run = async(bot, message, args, queue, skip) => {

  const searchString = message.content.split(" ").slice(1).join(" ")
  const url = searchString ? searchString.replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(message.guild.id);
  const skipQueue = skip.get(message.guild.id)

  let voiceChannel =message.member.voiceChannel
  
  if (!voiceChannel) return message.channel.send(`You need to be in a voice channel to skip music!`)
    
		if (!serverQueue) return message.channel.send("I can't skip Nothing?");
    
  if (serverQueue.songs[0].requester === message.author.id) {
     serverQueue.connection.dispatcher.end('Song has been skipped')
     if (serverQueue.looping) skipQueue.skipOnLoop = true
  } else {
    let skipper;
    let requiredVotes;
    console.log(skipQueue)
    
    if (serverQueue.started === false) {
      skipQueue.votes = 0
    }
      skipper = skipQueue.votes
      requiredVotes = Math.round(message.guild.me.voiceChannel.members.filter(u => !u.user.bot).size/2)
      if(message.guild.me.voiceChannel.members.has(serverQueue.songs[0].requester)) requiredVotes = requiredVotes - 1
    
      if (requiredVotes <= 1) requiredVotes = 1
    
      console.log(requiredVotes)
      skipQueue.started = true
    
    if (skipQueue.voted.includes(message.author.tag)) return message.channel.send(`You have already voted! ${requiredVotes - skipper} votes are needed!`)
      skipQueue.votes = skipper + 1
    console.log(requiredVotes - skipper)
    console.log(skipper)
      skipQueue.voted.push(message.author.tag)
    
      if (requiredVotes - skipper > 0) {
	   return message.channel.send(`Vote Skipped **${serverQueue.songs[0].title}**. ${requiredVotes - skipper} skips are needed! vote with p!voteskip!`)
      }
    
      if (skipper >= requiredVotes) {
        serverQueue.connection.dispatcher.end('Song has been skipped')
        return;
      }
  }
    

    // Time for the functions
    async function handleVideo(video, message, voiceChannel, playlist = false) {
  const serverQueue = queue.get(message.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`
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
    name: "skip",
    description: "Skips the current song thats playing!",
    usage: "skip"
}

exports.aliases = []
