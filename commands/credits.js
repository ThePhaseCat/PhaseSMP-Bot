const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('Sends a message detailing who made this bot'),
  async execute(interaction) {
		return interaction.reply(`This bot was made by ThePhaseCat! :D`);
	},
};
