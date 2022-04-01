const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ratio2')
        .setDescription('The second and more superior version of the ratio command')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to ratio')
                .setRequired(true)
        ),

  async execute(interaction) {
		return interaction.reply(`${interaction.options.getUser('user')}, my dad is the creator of the universe + who want me? + i am lonely + they did not think it could possibly happen, but they are releasing L + caught in 8k ultrawide hdr support on + android moment (even though it's better than iphone ngl) + phasecat has made the best ratios of all time + mald + shave your head + this is a joke lol + imagine not having a mega-base already lol + cope + ratio (round 3) + i spent a lot of time on these roasts please help me in any way possible + now trending + ali-a intro plays loudly inside your mind + oh my god guys guess what happened + want a break from the ads + tap here to get thirty uninterrupted minutes of music on spotify + youtube ads are annoying (like you tbh) + imagine getting into nft's like oh my god you're so stupid for owning a digital imagine + haha i screenshotted your nft + made using replit + sussy bakka moment + sussy + my rail is better than yours + get some bitches + ratio (round 4) + L (round 5) + insert nft hate here

This ratio has been executed by ${interaction.user} and is a joke (if you couldn't tell at all) `);
	},
};

//'${interaction.options.getUser('user')} you fell off + ratio + you are white + you are british + who asked + no u + deez nuts + radio + do not care + did not ask + i am a minor + i am neurodivergent + caught in 4k + cope + seethe + GG + in 1947 the worlds first general purpose computer, the 30 ton ENIAC was created + your mom + the hood watches markiplier now + grow up + L + L (part 2) + retweet + ligma + taco bell tortilla crunch + think outside the bun + ur benched + ur a wrench + i own you + ur dad fell off + my dad could beat ur dad up + ur aimhacking + silver elite + tryhard + boomer + sksksksk + ur beta + im sigma + ur submissive + L (part 3) + yb better + ur sus + this is a cry for help and i am extremely depressed. + quote tweet + you are cringe + i did your mom + you bought monkey nft + you are weirdchamp + you are a clown + my father left me at the age of 4 and i never recovered since + my dad owns steam + who want me? + i am lonely + they did not think it could possibly happen, but they are releasing L'