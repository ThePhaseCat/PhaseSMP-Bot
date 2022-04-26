const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slap')
        .setDescription('Gives a big old slap to someone of your choosing')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to slap')
                .setRequired(true)
        ),
  async execute(interaction) {
		return interaction.reply(`${interaction.user} decides to slap ${interaction.options.getUser('user')} very strongly.`);
	},
};
