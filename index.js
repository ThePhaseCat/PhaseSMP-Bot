const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const express = require("express");
const app = express();

app.listen(3000, () => {
 console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const client = new Client({ intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILDS"] });

//a bunch of command reading/creation stuff
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  client.user.setPresence({ activities: [{ name: 'V2 | Now featuring slash commands!' }], status: 'online' });
 console.log('Ready!');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});

//command error system
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on("message", message => {
  if(message.content.includes("bitches")){
    message.channel.send("<@" + message.author.id + "> , you're welcome https://www.wikihow.com/Get-Girls")
  }
})

client.login(process.env.tokenKey);