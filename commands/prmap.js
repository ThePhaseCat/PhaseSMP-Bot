const { SlashCommandBuilder } = require('@discordjs/builders');
// at the top of your file
const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const MapInfoEmbed = new MessageEmbed()
	.setColor('#800080')
	.setTitle('PhaseRail Map Links')
	.addFields(
		{ name: 'Network Map', value: 'Here is the link for the entire PhaseRail Network Map: https://media.discordapp.net/attachments/972306456093290528/980585780852449310/PhaseRail_Line_1_Phase_1.png?width=954&height=663' },
    { name: 'Line 1', value: 'Here is the link for PhaseRail Line 1: https://cdn.discordapp.com/attachments/899468483430072341/972288335924047912/167160052-fc5c6ea3-7959-4a68-9fd0-5d0beddc42e3.png'},
	);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prmap')
        .setDescription('Provides maps for the PhaseRail Network'),
  async execute(interaction) {
		await interaction.reply({ embeds: [MapInfoEmbed]});
	},
};
