const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bitches')
        .setDescription('Help someone get some bitches')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to help')
                .setRequired(true)
        ),
  async execute(interaction) {
		return interaction.reply(`${interaction.options.getUser('user')}, you're welcome https://www.wikihow.com/Get-Girls`);
	},
};
