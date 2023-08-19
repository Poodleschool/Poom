require('dotenv').config(); // Load the environment variables from .env file
const { Client } = require('discord.js');
const client = new Client();

const token = process.env.BOT_TOKEN;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    if (message.content.toLowerCase() === 'hello') {
        message.reply('Hello!');
    }
});

client.login(token);
