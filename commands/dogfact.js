const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dogfact')
        .setDescription('Want a random fact about dogs? Here you go!'),
  
  async execute(interaction) {
      const res = await fetch('https://dog-api.kinduff.com/api/facts');
      const fact = (await res.json()).fact;
      const embed = new MessageEmbed()
        .setTitle('🐶  Dog Fact  🐶')
        .setDescription(fact)
   await interaction.reply({ embeds: [embed]});
    }
  };
