// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');
const audioPlay = require('./audioPlay');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, StreamType, AudioPlayerStatus  } = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const commands = require('./music/commands');




// Create a new client instance
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.login(token);
// When the client is ready, run this code (only once)
client.once('ready', teste => {
	console.log('Ready!');
});

client.on('messageCreate', async message => {

    const {content} = message
    const [botComand, musicArgs] = content.split(" ")

   commands.play()


    const channel = message.member.voice.channel;

    console.log("mesmo assim chegou aqui")

    if (!channel) return message.reply("É necessario estar em um canal de audio para ativar o grande mestre dos djs, o Dj Val!")

    

    // console.log(channel)
	// const connection = joinVoiceChannel({
	// 	channelId: channel.id,
	// 	guildId: channel.guild.id,
	// 	adapterCreator: channel.guild.voiceAdapterCreator,
	// });
    // const player = createAudioPlayer();

    // const stream  = ytdl("https://www.youtube.com/watch?v=J4t4pMZBXZg&t=2281s", {filter: 'audioonly'});
   
    // const resource = createAudioResource(stream, {
	// 	inputType: StreamType.Arbitrary,
	// });

    // // entersState(player, AudioPlayerStatus.Playing, 5e3);
    // player.play(resource);
    // connection.subscribe(player);
    
});

