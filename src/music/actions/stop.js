

const leave = {
    name: "-stop",
    description: "Para de tocar o audio.",
    validator(message) {

        this.execute(message)
    },
    execute(message) {

        const { guildId, author, guild } = message
        const voiceAdapter = guild.client.voice.adapters.get(guildId)

        voiceAdapter.destroy()

        message.reply(`Você que manda ${author}.`)

    }
}

module.exports = leave
