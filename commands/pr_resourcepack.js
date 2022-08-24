const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resourcepack')
        .setDescription('Sends link to the github/download page for the PhaseSMP Rail Network Pack if you need to use it in your own worlds!'),
  async execute(interaction) {
		return interaction.reply(`Here's the link to the resource pack for the PhaseSMP Rail Network Pack (Please note that the resource pack is auto-downloaded via the server, so there's no need to use this in the server): https://github.com/ThePhaseCat/PhaseSMP-Rail-Network-Pack`);
	},
};
