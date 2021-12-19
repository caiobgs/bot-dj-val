
const { Client, Intents } = require('discord.js');
const config = require('./config');
const getAction = require('./core/getAction');



const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.login(config.token);

client.once('ready', teste => {
    console.log('Ready!');
});

client.on('messageCreate', async message => {

    const botAction = message.content.match("-[a-zA-Z]+")

    if (botAction) {
        const action =  getAction(botAction[0])
        action.validator(message)
    }

   
   

});

