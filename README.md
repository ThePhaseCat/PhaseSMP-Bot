## PhaseSMP Bot

This is a discord bot used on the PhaseSMP Discord Server (A private Minecraft survival server). The discord server is private and will remain private for the foreseeable future. This bot was originally made for the use of DiscordSRV, but has now migrated to a more standard discord bot with more typical bot features


This discord bot has been made with the latest version of discord.js (13) and features several things and features!
- Ability to ratio people alongside other questionable things
- Embed system for easy adding/changing of embeds
- Robust set of information commands
- Unique internet pulling system to allow for random images and facts
- Easy to customize existing commands and to add new ones as well!

## The bot supports multiple servers, but I'm not hosting this for public use at this time. You will have to host it yourself (Instructions later)

## Required Packages:
- discord-api-types
- discord.js
- express (Creates a website to be pinged, keeps bot online)
- @discord.js/builders
- @discord.js/rest
- node-fetch (MAKE SURE IT'S VERSION 2 AND NOT VERSION 3)

- Originally programmed via [replit](https://replit.com)
- Bot currently runs on a web server being hosted by [replit](https://replit.com)
- Currently being kept online via a website pinger 

## Steps to run/build this this:
- Clone project
- Make sure you have all required packages installed
- Head into deploy-commands.js and change the `ClientID` and `GuildID` to your discord bot's clientID and discord server ID
- Head to config.json and change the token variable to your bot's token!
- Run project and you should be good to go!
- Please look down below for guides on how to do several things with the bot

## Adding new commands:
- Make a new .js file in the commands folder 
- Name it whatever you want your new command to be (no spaces)
- Use the current discord.js slash command system to create a command!
- Or simply copy and paste from other commands to create your own!
- If there are any issues, feel free to create an issue!

## Registering new commands:
- Start the bot 
- Go to the shell and type in 'node deploy-commands.js'
- If it outputs 'Successfully reloaded application (/) commands', then the commands have updated!

## UPDATING BOT STATUS:
- Go to 'index.js'
- Head to the 'client.once' section
- Adjust the 'client.user.setPresense' to update the status of the bot!
- 
Feel free to provide any suggestions or feedback on my code, should be pretty simple to understand/manage. Plus, it's in a modular system, so it's easy to add new commands and what know whenever you feel like it!

## IF YOU HAVE ANY ISSUES, FEEL FREE TO CREATE AN ISSUE AND I CAN HELP YOU
