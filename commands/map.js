const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('map')
        .setDescription('Provides image for the PhaseSMP Map'),
  async execute(interaction) {
		return interaction.reply(`PhaseSMP Map coming soon...`);
	},
};
