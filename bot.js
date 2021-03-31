const axios = require('axios');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.login(config.BOT_TOKEN);


const rolldice = require('./methods/dice');
const highLow = require('./methods/highLow');
const shuffleList = require('./methods/shuffleList');

const prefix = '!!';

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'shuffle':
      shuffleList(args, message);
      break;

    case 'ping':
      const timeTaken = Date.now() - message.createdTimestamp;
      message.reply(`Pong! Latência de ${timeTaken}ms.`);
      break;

    case 'rolld4':
      rolldice(4, message);
      break;

    case 'rolld6':
      rolldice(6, message);
      break;

    case 'rolld10':
      rolldice(10, message);
      break;

    case 'rolld12':
      rolldice(12, message);
      break;

    case 'rolld20':
      rolldice(20, message);
      break;

    case 'high':
      highLow('high', message);
      break;

    case 'low':
      highLow('low', message);
      break;

    case 'dog':
      axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
        const image = response.data.message;

        message.channel.send(image);
      });
      break;

    case 'robot':
      message.channel.send(
        `https://robohash.org/${Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, '')
          .substr(0, 10)}`
      );
      break;
  }
});
