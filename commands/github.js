const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Sends link to Github (In case you could not look at the bio of the bot'),
  async execute(interaction) {
		return interaction.reply(`Here's the link to this bot's github: https://github.com/ThePhaseCat/PhaseSMP-Bot`);
	},
};
