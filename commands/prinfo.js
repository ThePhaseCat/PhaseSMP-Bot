const { SlashCommandBuilder } = require('@discordjs/builders');
// at the top of your file
const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const railEmbed = new MessageEmbed()
	.setColor('#800080')
	.setTitle('PhaseRail Information')
	.addFields(
		{ name: 'General Description', value: 'PhaseRail is a railway network that spans most of the inhabited regions of the PhaseSMP' },
    { name: 'Line Count', value: 'Currently, there are two lines on the PhaseRail Network', inline: true },
    { name: 'Line 1', value: 'About 2k blocks going from Coast Lighthouse Station to Slime Farm Station via Phase-Cave, Phase-Mall, and Spawn! **This line has been fully completed as of August 11, 2022**', inline: true },
    { name: 'Bullet Test Line', value: 'About 200ish blocks contained fully inside the PhaseRail HQ Lab. This line was created to test express services, which will come to PhaseRail soon! **This line has been fully completed as of June 14, 2022**', inline: true },
    { name: 'Line 2', value: 'More details will be posted about this line when construction begins sometime this year!', inline: true },
    { name: 'Line 3', value: 'More details will be posted about this line when construction begins sometime next year!', inline: true },
    { name: 'Line N1', value: 'More details will be posted about this line when construction begins sometime this year **This will be part of the PhaseRail Nether Service**', inline: true },
    { name: 'Line N2', value: 'More details will be posted about this line when construction begins sometime this year **This will be part of the PhaseRail Nether Service**', inline: true },
	);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prinfo')
        .setDescription('Provides details on PhaseRail, including all of its lines! (Also includes future lines :eyes:)'),
  async execute(interaction) {
		await interaction.reply({ embeds: [railEmbed], ephemeral: true });
	},
};
