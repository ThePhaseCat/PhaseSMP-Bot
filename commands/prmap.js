const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prmap')
        .setDescription('Provides image for the PhaseRail Map'),
  async execute(interaction) {
		return interaction.reply(`This will be updated soon with a two maps; a map that contains line paths on top of a geographic map and a map containing just the stations along a route.`);
	},
};
