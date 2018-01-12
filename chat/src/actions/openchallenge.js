module.exports = function openchallenge ({ bot, addRequest, message, flags }) {
  const challenger = message.author
  const mentions = bot.mentions(message)

  if (mentions.length) return message.send('It\'s an open challenge man...')

  addRequest({ challenger, challengee: null, message, unranked: flags.forfun })
}
