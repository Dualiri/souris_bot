const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class cheeseCommand extends Command {
  constructor(client) {
    super(client, {
      name:"shanub",
      group: 'mice',
      memberName: 'shanub',
      description: 'You need running it to see.'
    })
  }
  run(msg) {
    msg.say('|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|—|¯¯¯¯¯\\ \n| SHANUB ENCOMENDAS |» ¦  []  []  |\n|=¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯=)   ]  ------  ]\n¯¯(@@)¯¯¯(@@)¯¯¯¯¯¯¯¯¯¯¯¯¯(@)')
  }
}