// at the top of your file
const { MessageEmbed } = require('discord.js');

//provides slash command info
const { SlashCommandBuilder } = require('@discordjs/builders');

// inside a command, event listener, etc.
const pingEmbed = new MessageEmbed()
	.setColor('#800080')
	.setDescription('Pong!')      
.setImage('https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170806880/83825962-%EC%99%80%EC%9D%B4%ED%8C%8C%EC%9D%B4-%EC%8B%A0%ED%98%B8-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%EB%94%94%EC%9E%90%EC%9D%B8.jpg')
	.setFooter({ text: 'this is footer text, say hello or else' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong! (bot testing reasons)'),
	async execute(interaction) {
		await interaction.reply({ embeds: [pingEmbed] });
	},
};