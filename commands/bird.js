const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bird')
        .setDescription('Sends a random picture of a bird!'),
  
  async execute(interaction) {
      const res = await fetch('http://shibe.online/api/birds');
      const img = (await res.json())[0].url;
      const embed = new MessageEmbed()
        .setTitle('🐦  Tweet Tweet!  🐦')
        .setImage(img)
   await interaction.reply({ embeds: [embed]});
    }
  };
