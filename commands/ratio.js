const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ratio')
        .setDescription('Only use when the time is right...')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to ratio')
                .setRequired(true)
        ),

  async execute(interaction) {
		return interaction.reply(`${interaction.options.getUser('user')}, you fell off + ratio + ratio 2 + ratio 3 + you are white + you are british + who asked + no u + deez nuts + radio + do not care + did not ask + i am a minor + i am neurodivergent + caught in 4k + imagine not having an rtx 3080ti + imagine not having an iphone 21 pro i15 max 8 pro + cope + seethe + GG + :D + in 1947 the worlds first general purpose computer, the 30 ton ENIAC was created + your mom + the hood watches dream now + grow up + L + L (part 2) + ratio (part 2) + L (round 3) + retweet + ligma + taco bell tortilla crunch + think outside the bun + ur benched + ur a wrench + i own you + ur dad fell off + my dad could beat ur dad up + ur aimhacking + silver elite + tryhard + boomer + zoomer + bald + sksksksk + ur beta + im sigma + ur submissive + L (round 4) + yb better + ur sus + you are a sussy bakka + there is an imposter among us + this is a cry for help and i am extremely depressed. + quote tweet + you are cringe + i did your mom + you bought monkey nft + you are mining cryptocurrency + you are weirdchamp + you are a clown + my father left me at the age of 4 and i never recovered since + my dad owns steam + my dad owns epic

This ratio has been executed by ${interaction.user} and is a joke (if you couldn't tell at all) `);
	},
};

//'${interaction.options.getUser('user')} you fell off + ratio + you are white + you are british + who asked + no u + deez nuts + radio + do not care + did not ask + i am a minor + i am neurodivergent + caught in 4k + cope + seethe + GG + in 1947 the worlds first general purpose computer, the 30 ton ENIAC was created + your mom + the hood watches markiplier now + grow up + L + L (part 2) + retweet + ligma + taco bell tortilla crunch + think outside the bun + ur benched + ur a wrench + i own you + ur dad fell off + my dad could beat ur dad up + ur aimhacking + silver elite + tryhard + boomer + sksksksk + ur beta + im sigma + ur submissive + L (part 3) + yb better + ur sus + this is a cry for help and i am extremely depressed. + quote tweet + you are cringe + i did your mom + you bought monkey nft + you are weirdchamp + you are a clown + my father left me at the age of 4 and i never recovered since + my dad owns steam + who want me? + i am lonely + they did not think it could possibly happen, but they are releasing L'