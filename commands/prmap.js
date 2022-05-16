const { SlashCommandBuilder } = require('@discordjs/builders');
// at the top of your file
const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const MapInfoEmbed = new MessageEmbed()
	.setColor('#800080')
	.setTitle('PhaseRail Map Links')
	.addFields(
		{ name: 'Line 1', value: 'Here is the link for PhaseRail Line 1: https://cdn.discordapp.com/attachments/899468483430072341/972288335924047912/167160052-fc5c6ea3-7959-4a68-9fd0-5d0beddc42e3.png' },
    { name: 'Coming soon', value: 'Coming soon', inline: true },
	);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prmap')
        .setDescription('Provides maps for the PhaseRail Network'),
  async execute(interaction) {
		await interaction.reply({ embeds: [MapInfoEmbed]});
	},
};
