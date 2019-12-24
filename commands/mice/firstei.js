const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class cheeseCommand extends Command {
  constructor(client) {
    super(client, {
      name:"firstei",
      group: 'mice',
      memberName: 'firstei',
      description: 'You need running it to see.'
    })
  }
  run(msg) {
    msg.say('First nub')
  }
}