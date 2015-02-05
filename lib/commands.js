var irc = require('twitch-irc');
var dotenv = require('dotenv');
dotenv.load(); // For enviroment variables

// Calling a new client..
var client = new irc.client({
  options: {
    debug: true,
    logging: true,
    chat: true,
    tc: 3
  },
  identity: {
    username: 'eyeswl',
    password: 'oauth:0508tidpq8liqdrj0tp1qk9jok33cg'
  },
  channels: ['eyeswl']
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
});
