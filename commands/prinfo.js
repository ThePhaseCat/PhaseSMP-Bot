const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prinfo')
        .setDescription('Provides details on PhaseRail'),
  async execute(interaction) {
		return interaction.reply(`Details on PhaseRail will arrive once the first line opens...`);
	},
};
