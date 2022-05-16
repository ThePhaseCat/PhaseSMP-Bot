const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILDS"] });

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
    const status = interaction.options.getString('text');
    client.user.setPresense((status));
		await interaction.reply(`something should be displayed: ${interaction.options.getString('text')}`);
	},
};

//client.user.setPresence({ activities: [{ name: 'meow' }], status: 'online' });
