// at the top of your file
const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('Replies with Minecraft Server rules and Discord Server rules!'),
	async execute(interaction) {
		return interaction.reply(`Check the rules in the discord lol`);
  },
};

// No NSFW stuff please \n\n2. Try not to constantly @ someone \n\n3. Try to keep bot commands in 🤖bot-commands. It is ok if you forget to and like you type it in general or something. That always happens to me lol. \n\n4. Please keep memes in the meme channel \n\n5. Please keep memes safe for work (pretty please)
