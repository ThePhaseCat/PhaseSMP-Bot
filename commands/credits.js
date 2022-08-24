const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('Who made the bot?'),
  async execute(interaction) {
		return interaction.reply(`This bot was made by ThePhaseCat! Meow!`);
	},
};
