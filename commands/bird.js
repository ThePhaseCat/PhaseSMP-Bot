const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bird')
        .setDescription('Finds a random bird for your viewing pleasure'),
  
  async execute(interaction) {
      const res = await fetch('http://shibe.online/api/birds');
      const img = (await res.json())[0].url;
      const embed = new MessageEmbed()
        .setTitle('🐦  Chirp!  🐦')
        .setImage(img)
   await interaction.reply({ embeds: [embed]});
    }
  };
