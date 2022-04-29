const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Finds a random cat for your viewing pleasure'),
  
  async execute(interaction) {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const img = (await res.json())[0].url;
      const embed = new MessageEmbed()
        .setTitle('🐱  Meow!  🐱')
        .setImage(img)
   await interaction.reply({ embeds: [embed]});
    }
  };
