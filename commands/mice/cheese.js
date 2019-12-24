const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class cheeseCommand extends Command {
  constructor(client) {
    super(client, {
      name:"cheese",
      aliases: ["queijo"],
      group: 'mice',
      memberName: 'cheese',
      description: 'You need running it to see.'
    })
  }
  run(msg) {
    msg.say('Dou 10 conto nele')
  }
}