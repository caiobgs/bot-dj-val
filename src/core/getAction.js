const fs = require('fs');
const { Collection } = require('discord.js');

const getAction = (actionName) => {

    const actionsFiles = fs.readdirSync('./src/music/actions/').filter(file => file.endsWith('.js'));
    
    const actions = new Collection();

    actionsFiles.forEach(file => {
        const action = require(`../music/actions/${file}`);
        actions.set(action.name, action);
    });

    return actions.get(actionName)
}

module.exports = getAction