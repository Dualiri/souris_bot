const { Client } = require('discord.js-commando')
const path = require('path')
require('dotenv/config')

const luke = '339176052633108480'
const du = '160922718877777920' 

const client = new Client({
	commandPrefix: '.',
	owner: [du, luke],
	invite: 'https://discord.gg/jVmW6Z'
})

client.registry
.registerDefaultTypes()
.registerGroups([
	['moderation', 'Admin\'s commands.'],
	['mice', 'Mice\' commands.']
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
	console.log(`Logado como ${client.user.tag}(${client.user.id})`)
	client.user.setActivity('Pedra na Cruz')
})

client.on('error', console.error)

client.on("message", async message => {
	if(message.author.bot) return

	console.log(`${message.author.username}: ${message.content.toLowerCase()}`)
})

client.login(process.env.token)
	.then(() => {
		// console.log('Success')
	})
	.catch((err) => {
		console.log(err)
	})