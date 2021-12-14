const { joinVoiceChannel } = require('@discordjs/voice');

const createVoiceConnection = message => {
    const channel = message.member.voice.channel;
  
    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    return connection
}

module.exports = createVoiceConnection