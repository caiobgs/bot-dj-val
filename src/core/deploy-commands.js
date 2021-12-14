const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('../config.json');


const commands = [
	new SlashCommandBuilder().setName('play')
    .setDescription('Replies with pong!')
    .addStringOption(option => option.setName('url').setDescription('Coloque a url da sua Musica'))
	
]
.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);