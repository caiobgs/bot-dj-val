const { createAudioPlayer, createAudioResource, StreamType } = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const createVoiceConnection = require('../../core/createVoiceConnection');

const play = {
    name: "-play",
    description: "Detona dj Val",
    validator(message) {
        if (!channel) return message.reply("É necessario estar em um canal de audio para ativar o grande mestre dos djs, o Dj Val!")
        this.execute(message)
    },
    execute(message) {

        const connection = createVoiceConnection(message)
        const musicUrl = message.content.split(' ')[1]
        const player = createAudioPlayer();

        const stream = ytdl( musicUrl, { filter: 'audioonly' });

        const resource = createAudioResource(stream, {
            inputType: StreamType.Arbitrary,
        });

        player.play(resource);
        connection.subscribe(player);
    }
}

module.exports = play
