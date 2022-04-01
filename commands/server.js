// at the top of your file
const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

// inside a command, event listener, etc.
const serverEmbed = new MessageEmbed()
	.setColor('#800080')
	.setTitle('PhaseSMP Server Details!')
	.setDescription('**PhaseSMP began around June 15th, 2021**')
	.addFields(
		{ name: '**Server IP**', value: 'PhaseCat.minehut.gg', inline: true },
		{ name: '**World Seed**', value: '(-2883509619344644771)', inline: true },
    { name: '**Server Version**', value: '1.18.2', inline: true },
    { name: '**Difficulty**', value: 'Normal', inline: true },
	)
	.setImage('https://i.imgur.com/OVnZ6hB.png')
	.setTimestamp()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverdetails')
		.setDescription('Replies with server details!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [serverEmbed] });
	},
};
