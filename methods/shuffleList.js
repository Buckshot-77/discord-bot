const _ = require('lodash');

const shuffleList = (users, message) => {
  const usersList = [...users];
  const randomizedUsers = _.shuffle(usersList);
  let messageToBeReturned = '';

  randomizedUsers.forEach((user, index) => {
    messageToBeReturned += `${index + 1}- ${user}\n`;
  });

  message.channel.send(
    `Olá, esses são os usuários randomizados que você pediu:\n${messageToBeReturned}`
  );
};

module.exports = shuffleList;
