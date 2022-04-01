// at the top of your file
const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

// inside a command, event listener, etc.
const ruleEmbed = new MessageEmbed()
	.setColor('#800080')
	.setTitle('PhaseSMP Rules (SMP and Discord)')
	.addFields(
		{ name: '**SMP Rules**', value: 'test' },
    { name: '**#1**', value: 'Have fun!', inline: true },
		{ name: '**#2**', value: 'Do not steal from others (unless you have permission), do not grief and if a creeper blows up a build, please try to fix it!', inline: true },
    { name: '**#3**', value: 'Invite whoever you want (as long as you check it with me first)', inline: true },
    { name: '**#4**', value: 'Do not leak the server IP', inline: true },
    { name: '**#5**', value: 'Do not try to scam people', inline: true },
    { name: '**#6**', value: 'Use common sense and do not attempt to crash the server (unless it was an accident)', inline: true },
    { name: '**#7**', value: 'Do not break any minecart-sign spawners', inline: true },
    { name: '**Discord Rules**', value: 'test' },
    { name: '**#1**', value: 'Please do not send anything NSFW', inline: true },
    { name: '**#2**', value: 'Please do not constantly @ someone', inline: true },
    { name: '**#3**', value: 'Please keep memes in the meme channel, and also keep them safe for work', inline: true },
	)
	.setImage('https://imgur.com/a/37Jh1oO')
	.setTimestamp()
	.setFooter({ text: 'woah it is footer text', iconURL: 'https://i.imgur.com/OVnZ6hB.png' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Replies with Minecraft Server rules and Discord Server rules'),
	async execute(interaction) {
		await interaction.reply({ embeds: [ruleEmbed] });
  },
};

// No NSFW stuff please \n\n2. Try not to constantly @ someone \n\n3. Try to keep bot commands in 🤖bot-commands. It is ok if you forget to and like you type it in general or something. That always happens to me lol. \n\n4. Please keep memes in the meme channel \n\n5. Please keep memes safe for work (pretty please)