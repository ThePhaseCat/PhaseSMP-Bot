const { SlashCommandBuilder } = require('@discordjs/builders');
// at the top of your file
const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const railEmbed = new MessageEmbed()
	.setColor('#800080')
	.setTitle('PhaseRail Information')
	.addFields(
		{ name: 'General Description', value: 'PhaseRail is a railway network that will eventually span most of the inhabited regions of the PhaseSMP' },
    { name: 'Line Count', value: 'Currently, there is only one line on the PhaseRail Network', inline: true },
    { name: 'Line 1', value: '600 Blocks going from Phase-Cave Station to Spawn Station via Phase-Mall. **There are plans for an extension later down the line**', inline: true },
	);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prinfo')
        .setDescription('Provides details on PhaseRail'),
  async execute(interaction) {
		await interaction.reply({ embeds: [railEmbed], ephemeral: true });
	},
};
