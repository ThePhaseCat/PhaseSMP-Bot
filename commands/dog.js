const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dog')
        .setDescription('Finds a random dog for your viewing pleasure'),
  
  async execute(interaction) {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const img = (await res.json())[0].url;
      const embed = new MessageEmbed()
        .setTitle('🐶  Woof!  🐶')
        .setImage(img)
   await interaction.reply({ embeds: [embed]});
    }
  };
