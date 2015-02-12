var irc = require('twitch-irc');
var image = require('./lib/image');
var protection = require('./lib/protection');
var dotenv = require('dotenv');
dotenv.load(); // For enviroment variables

// Calling a new client..
var client = new irc.client({
  options: {
    debug: true,
    debugDetails: true,
    debugIgnore: ['ping', 'chat'],
    logging: false,
    chat: true,
    tc: 3
  },
  identity: {
    username: process.env.USERNAME,
    password: process.env.OATH_TOKEN,
  },
  channels: [process.env.CHANNELS],
});

// Connect the client to server..
client.connect();

// Your events..
client.addListener('chat', function (channel, user, message) {
  // If the message starts with !hello..
  if (message.indexOf('!hello') === 0) {
    // Say something
    // https://github.com/Schmoopiie/twitch-irc/wiki/Command:-Say
    client.say(channel, 'Hey '+user.username+'! How you doing? Kappa');
  }
  if (message.slice(0,4).indexOf('!gif') === 0) {
    image.giphy( message.slice(5), function(url) {
      client.say(channel, url);
    });
  }
  if((client.utils.symbols(message) > 0) && (user.special.length <= 0 || user.special.contains('turbo'))) {
    client.timeout(channel, user.username, 5);
    client.say(channel, 'Hey '+user.username+"! Please don't spam");
  }
  if(message.indexOf('!rules') === 0) {
    client.say(channel, "1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.");
    client.say(channel, "2. A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law.");
    client.say(channel, "3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.");
  }
});
