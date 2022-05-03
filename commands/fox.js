const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fox')
        .setDescription('Finds a random fox for your viewing pleasure'),
  
  async execute(interaction) {
      const res = await fetch('https://randomfox.ca/floof/');
      const img = (await res.json()).image;
      const embed = new MessageEmbed()
        .setTitle('🦊  What does the fox say?  🦊')
        .setImage(img)
   await interaction.reply({ embeds: [embed]});
    }
  };
