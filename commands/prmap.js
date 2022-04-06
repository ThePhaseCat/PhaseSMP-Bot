const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prmap')
        .setDescription('Provides image for the PhaseRail Map'),
  async execute(interaction) {
		return interaction.reply(`The PhaseRail Map will be provided once the first line opens...`);
	},
};
