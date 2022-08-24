const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('highfive')
        .setDescription('Give a positive high-five to someone of your choosing')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you would like to high-five!')
                .setRequired(true)
        ),
  async execute(interaction) {
		return interaction.reply(`${interaction.user} decides to give ${interaction.options.getUser('user')} a high-five! Yeah!`);
	},
};
