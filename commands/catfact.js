const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catfact')
        .setDescription('Want a random fact about cats? Here you go!'),
  
  async execute(interaction) {
      const res = await fetch('https://catfact.ninja/fact');
      const fact = (await res.json()).fact;
      const embed = new MessageEmbed()
        .setTitle('🐱  Cat Fact!  🐱')
        .setDescription(fact)
   await interaction.reply({ embeds: [embed]});
    }
  };
