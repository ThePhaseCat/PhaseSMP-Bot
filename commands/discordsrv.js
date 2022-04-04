// at the top of your file
const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

// inside a command, event listener, etc.
const discordSRVEmbed = new MessageEmbed()
	.setColor('#800080')
	.setTitle('DiscordSRV Info')
	.setThumbnail('https://i.imgur.com/dC6hVV7.png')
	.addFields(
		{ name: '**What is DiscordSRV?**', value: 'DiscordSRV is a Minecraft Plugin that links Minecraft Chat with Discord and also adds proximity voice chat!' },
    { name: '**How do I use the proximity voice chat feature?**', value: 'Make sure to link your discord account to your Minecraft account using the command that it prompts you to use in chat!' },
    { name: '**MAKE SURE TO BE IN THE LOBBY VC FOR PROXIMITY VOICE CHAT TO WORK', value: 'nothing' },
	)
	.setImage('https://i.imgur.com/dC6hVV7.png')
	.setTimestamp()
	.setFooter({ text: 'hello footer text', iconURL: 'https://i.imgur.com/dC6hVV7.png' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('discordsrv')
		.setDescription('Details DiscordSRV details'),
	async execute(interaction) {
		await interaction.reply({ embeds: [discordSRVEmbed], ephemeral: true });
	},
};
