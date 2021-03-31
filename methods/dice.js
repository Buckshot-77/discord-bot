const rolldice = (value, messageObject) => {
  const diceValue = Math.ceil(Math.random() * value);

  messageObject.channel.send(`O dado retornou ${diceValue} como valor`);
};

module.exports = rolldice;