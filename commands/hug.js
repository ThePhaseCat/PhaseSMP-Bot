const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Give a hug to someone (how kind and thoughtful)')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want hug')
                .setRequired(true)
        ),
  async execute(interaction) {
		return interaction.reply(`${interaction.user} decides to give ${interaction.options.getUser('user')} a hug.`);
	},
};
