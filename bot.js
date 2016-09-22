var config = require('./config.json');

if (config.version != "1") {
    throw "You changed the version."
}

var messages = require('./messages.json')
var Discord = require('discord.io');

var bot = new Discord.Client({
    autorun: true,
    token: config.token
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (messages[message] != undefined) {
        theMes = messages[message];
        bot.sendMessage({
            to: channelID,
            message: theMes
        });
    }
});