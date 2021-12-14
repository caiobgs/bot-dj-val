const { createAudioPlayer, createAudioResource, StreamType } = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const createVoiceConnection = require('../../core/createVoiceConnection');

const play = {
    name: "-play",
    description: "Detona dj Val",
    validator(message) {
        const channel = message.member.voice.channel
        const musicUrl = message.content.split(' ')[1]

        if (!channel) return message.reply("É necessario estar em um canal de audio para ativar o grande mestre dos djs, o Dj Val!")
        if (!musicUrl) return message.reply("Erro ao adicionar musica, certifique-se da utilização correta do comando. Exemplo: -play https://www.youtube.com/watch?v=OR74idpsweg ")

        this.execute(message, musicUrl)
    },
    execute(message, musicUrl) {

        const connection = createVoiceConnection(message)
        
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
