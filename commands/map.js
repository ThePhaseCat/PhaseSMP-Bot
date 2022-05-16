// at the top of your file
const { MessageEmbed } = require('discord.js');

//provides slash command info
const { SlashCommandBuilder } = require('@discordjs/builders');

// inside a command, event listener, etc.
const pingEmbed = new MessageEmbed()
	.setColor('#800080')
	.setDescription('Here is the map of the PhaseSMP!')      
.setImage('https://media.discordapp.net/attachments/854085527791206410/972316432148861048/unknown.png?width=1094&height=662')
	.setFooter({ text: 'this is footer text, say hello or else' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('map')
		.setDescription('Provides the map of the PhaseSMP'),
	async execute(interaction) {
		await interaction.reply({ embeds: [pingEmbed]});
	},
};
