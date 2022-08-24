const { SlashCommandBuilder } = require('@discordjs/builders');
// at the top of your file
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('prmap')
        .setDescription('Provides a map for the PhaseRail Network'),
  async execute(interaction) {
		return interaction.reply(`To view maps, please check the maps channel in the PhaseSMP discord!`);
	},
};
