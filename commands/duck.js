const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('duck')
        .setDescription('Finds a random duck for your viewing pleasure'),
  
  async execute(interaction) {
      const res = await fetch('https://random-d.uk/api/v2/random');
      const img = (await res.json())[0].url;
      const embed = new MessageEmbed()
        .setTitle('🦆  Quack!  🦆')
        .setImage(img)
   await interaction.reply({ embeds: [embed]});
    }
  };
