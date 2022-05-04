const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Changes the status of the bot (WIP COMMAND)')
        .addStringOption(option =>
            option
                .setName('text')
                .setDescription('The text to display for the new bot status')
                .setRequired(true)
        ),
  async execute(interaction) {
		return interaction.reply(`something should be displayed: ${interaction.options.getString('text')}`);
	},
};
