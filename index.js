const { Client } = require("discord.js")
require('dotenv/config')
const token = process.env.token

const client = new Client({
  disableEveryone: true
})

client.on("ready", () => {
  console.log("I'm online bb")
})

client.on("message", async message => {
	if(message.author.bot) return
	if(message.channel.type === "dm") return

	//let command = message.content[0]
	//console.log(command)
	let command = message.content.toLowerCase()

	//if (command !== "/") return

	if (command === "queijo") {
		message.channel.send("Dou 10 conto nele")
	} else if (command === 'shanub') {
		message.channel.send("|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|—|¯¯¯¯¯\\ \n| SHANUB ENCOMENDAS |» ¦  []  []  |\n|=¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯=)   ]  ------  ]\n¯¯(@@)¯¯¯(@@)¯¯¯¯¯¯¯¯¯¯¯¯¯(@)")
	} else if (command === 'firstei') {
		message.channel.send("First nub")
	}


	console.log(`${message.author.username} said: ${message.content}`)
})

console.log(`Token: ${token}`)
client.login(token)
	.then(() => {
		console.log('Success')
	})
	.catch((err) => {
		console.log(err)
	})
