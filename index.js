// Importe les outils nécessaires de discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Crée une nouvelle instance de client (ton bot) avec les intentions nécessaires
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Événement : s'exécute une seule fois quand le bot est bien allumé et connecté
client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} !`);
});

// Événement : s'exécute à chaque message envoyé sur un serveur où est le bot
client.on('messageCreate', message => {
    // Ignore les messages envoyés par des bots pour éviter les boucles infinies
    if (message.author.bot) return;

    // Si quelqu'un tape "!ping", le bot répond "Pong !"
    if (message.content === '!ping') {
        message.reply('Pong ! 🏓');
    }
});

// Connecte ton bot à Discord en utilisant ton Token secret
client.login('MTU2OTgzNjQ0MTA3NTE5NTk0NQ.GPViUg.VobYE-CB_Xn40NvhK-fy-B9tPUMds7oJdpRU5s');
