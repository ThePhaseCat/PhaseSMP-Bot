//provides slash command info
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('phasecat')
		.setDescription('Pings phasecat for no reason'),
	async execute(interaction) {
		await interaction.reply(('<@551232748896124930> you have now been pinged'));
	},
};