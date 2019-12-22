// const Discord = require("discord.js")
const { Client } = require("discord.js")
//const { command } = require("discord.js-comando")
const token = "NjU2NjUzOTA3NzAyOTcyNDM4.Xf5jmA.P__uFji7hCPdetds7-QzldPIk04"

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

client.login(token)
	.then(() => {
		console.log('Success')
	})
	.catch((err) => {
		console.log(err)
	})
