const Discord = require('discord.js');
const key = process.env.YT_TOKEN
const yt = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(key);
const opus = require("node-opus");


class TimeParser {
      constructor({ hours, minutes, seconds }) {
          this.hours = +hours || 0;
          this.minutes = +minutes || 0;
          this.seconds = +seconds || 0;
    }
  
      parseTime(num) {
      return String(num).length > 1 ? num : `0${num}`;
    }
  
      format() {
      const { hours, minutes, seconds, parseTime } = this;
        if (!hours || hours === 0) return `${parseTime(minutes)}:${parseTime(seconds)}`
      return `${parseTime(hours)}:${parseTime(minutes)}:${parseTime(seconds)}`;
    }
}

exports.run = async (bot, message, args, queue, skip) => {
    const searchString = message.content.split(" ").slice(1).join(" ")
  const url = searchString ? searchString.replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(message.guild.id);
  const skipQueue = skip.get(message.guild.id)
  
let voiceChannel = message.member.voiceChannel

  if(!voiceChannel) return message.channel.send("You need to be in a voice channel to play music");

  const permissions = voiceChannel.permissionsFor(bot.user);
  if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
		  const playlist = await youtube.getPlaylist(url);
		  const videos = await playlist.getVideos();
      if (playlist.duration.hours > 2) return message.channel.send("Please select a song that is less than 3 hours long!")
      console.log(playlist)
		  for (const video of Object.values(videos)) {
		    const video2 = await youtube.getVideoByID(video.id);
		    await handleVideo(video2, message, voiceChannel, true);
		  }
      const playedFromLink = new Discord.RichEmbed()
      .setDescription(`:white_check_mark: Playlist: **${Discord.escapeMarkdown(playlist.title)}** has been added to the queue!`)
      .setThumbnail(playlist.thumbnails.high.url)
      .setColor("#503d82")
      .setFooter(`${playlist.duration.hours} hours, ${playlist.duration.minutes} minutes, and ${playlist.duration.seconds} seconds long`)
		  return message.channel.send(playedFromLink)
		} else {
		  try {
		    var video = await youtube.getVideo(url);
		  } catch (error) {
		    try {
          if (!searchString) return message.channel.send("Please provide a link or a string")
		      var videos = await youtube.searchVideos(searchString, 10);
		      let index = 0;

		      const Embed2 = new Discord.RichEmbed()
          .setTitle(":musical_note: Song Selection :musical_note:")
          .setDescription(require('he').decode(videos.map(video2 => `**${++index} -** ${Discord.escapeMarkdown(video2.title)}`).join('\n')))
          .setColor("#503d82")
          .setFooter("Please provide a value to select one of the search results ranging from 1-10.")


          let msgtoDelete = await message.channel.send({embed: Embed2});

          try {
            var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
              maxMatches: 1,
              time: 10000,
              errors: ['time']
            });
            msgtoDelete.delete();
          } catch (err) {
            console.error(err);
            const noPick = new Discord.RichEmbed()
            .setDescription("No or invalid value entered, cancelling video selection.")
            .setColor("#503d82")
            message.channel.send({embed: noPick});
            msgtoDelete.delete()
            return;
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex -1].id);
		    } catch (err) {
		      console.error(err);
		      return message.channel.send(":sos: I could not obtain any search results.");
		    }
		  }
		  return handleVideo(video, message, voiceChannel);
		}


		async function handleVideo(video, message, voiceChannel, playlist = false) {
		  const serverQueue = queue.get(message.guild.id);
      if (video.duration.hours > 2) return message.channel.send("Please select a song that is less than 2 hours and 59 minutes long!")
		  console.log(video);
		  const song = {
		    id: video.id,
		    title: video.title,
		    url: `https://www.youtube.com/watch?v=${video.id}`,
        thumbnail: video.thumbnails.high.url,
        duration: `${video.duration.hours} hours, ${video.duration.minutes} minutes, and ${video.duration.seconds} seconds long`,
        time: new TimeParser({ hours: video.duration.hours, minutes: video.duration.minutes, seconds: video.duration.seconds }).format(),
        requester: message.author.id
		  };
		  if (!serverQueue) {
		    const queueConstruct = {
		      textChannel: message.channel,
		      voiceChannel: voiceChannel,
		      connection: null,
		      songs: [],
		      volume: 5,
		      playing: true,
          looping: false
		    };
        
        const skipConstruct = {
          votes: 0,
          voted: [],
          started: false,
          skipOnLoop: false
        }
        queueConstruct.songs.push(song);
        skip.set(message.guild.id, skipConstruct)
		    queue.set(message.guild.id, queueConstruct);

		    try {
		      var connection = await voiceChannel.join();
		      queueConstruct.connection = connection;
		      play(message.guild, queueConstruct.songs[0]);
		    } catch (error) {
		      console.error(`I could not join the voice channel: ${error}`);
		      queue.delete(message.guild.id);
		      return message.channel.send(`I could not join the voice channel: ${error}`)
		    }
		  }
      if (serverQueue) {
		    serverQueue.songs.push(song);
		    console.log(serverQueue.songs);
        const playedFromLink = new Discord.RichEmbed()
      .setDescription(`:white_check_mark: Playlist: **${Discord.escapeMarkdown(song.title)}** has been added to the queue!`)
      .setImage(song.thumbnail)
      .setColor("#503d82")
      .setFooter(song.duration)
		    if (playlist) return undefined;
  		  else return message.channel.send(playedFromLink)
		  }
		  return undefined;
		}

		function play(guild, song) {
		  const serverQueue = queue.get(guild.id);
      const skipQueue = skip.get(guild.id)

		  if (!song) {
		    serverQueue.voiceChannel.leave();
		    queue.delete(guild.id);
        skip.delete(guild.id)
        message.channel.send("All of the songs are done playing, thanks for listening!")
		    return;
		  }
      
      if (message.guild.me.voiceChannel.members.size < 2) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        skip.delete(guild.id)
        message.channel.send("I have stopped playing the music because everyone has left. Thanks for listening!")
        return;
      }
		  console.log(serverQueue.songs);

		  const dispatcher = serverQueue.connection.playStream(yt(song.url,{filter: 'audioonly', quality: 'highestaudio', highWaterMark: 1<<25 }), {highWaterMark: 1})
		          .on('end', reason => {
		            if (reason === "Stream is not generating quickly enough.") console.log('Song ended.');
                console.log(serverQueue.songs)
                if (serverQueue.looping === true) {
                  if (skipQueue.skipOnLoop === true) {
                    serverQueue.songs.shift();
                    skipQueue.skipOnLoop = false
                    play(guild, serverQueue.songs[0]);
                  }
                  if (skipQueue.skipOnLoop === false) {
                  let currentsong = serverQueue.songs[0]
                  serverQueue.songs.push(currentsong)
                  serverQueue.songs.shift();
                  play(guild, serverQueue.songs[0]);
                  }
                } else {
		            serverQueue.songs.shift();
		            play(guild, serverQueue.songs[0]);
                }
		          })
		          .on('error', error => console.error(error));
      skip.set(message.guild.id, {votes: 0, voted: [], started: false})
		  dispatcher.setVolumeLogarithmic(0.8);
      const playedFromLink = new Discord.RichEmbed()
      .setDescription(`🎵 Playlist: **${Discord.escapeMarkdown(song.title)}** is now playing!`)
      .setThumbnail(song.thumbnail)
      .setColor("#503d82")
      .setFooter(song.duration)
       message.channel.send(playedFromLink)
		}
};


exports.help = {
    name: "play",
    description: "Sings music to you",
    usage: "play [song-name] || play [url] || play [playlist-url]"
}

exports.aliases = []
