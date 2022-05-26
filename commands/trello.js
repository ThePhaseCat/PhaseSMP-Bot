const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trello')
        .setDescription('Sends link to the Trello Page for the PhaseSMP'),
  async execute(interaction) {
		return interaction.reply(`This command doesn't contain this link due to the Trello being meant to be private. As such, you can not access it through github...`);
	},
};
