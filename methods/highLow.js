const highLow = (bet, messageObject) => {
  const diceValue = Math.ceil(Math.random() * 6);

  switch (bet) {
    case 'high':
      if (diceValue > 3) {
        messageObject.reply(`Ganhou. Dado deu: ${diceValue}`);
      } else {
        messageObject.reply(`Perdeu. Dado deu: ${diceValue}`);
      }
      break;
    case 'low':
      if (diceValue <= 3) {
        messageObject.reply(`Ganhou. Dado deu: ${diceValue}`);
      } else {
        messageObject.reply(`Perdeu. Dado deu: ${diceValue}`);
      }
      break;
  }
};

module.exports = highLow;