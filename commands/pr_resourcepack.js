const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resourcepack')
        .setDescription('Sends link to the github/download page for the PhaseSMP Rail Network Pack for use in sessions other than the PhaseSMP'),
  async execute(interaction) {
		return interaction.reply(`Here's the link to the resource pack for the PhaseSMP Rail Network Pack: https://github.com/ThePhaseCat/PhaseSMP-Rail-Network-Pack`);
	},
};
