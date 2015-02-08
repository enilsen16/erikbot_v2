var app = exports = module.exports = {};
var http = require('http');
var dotenv = require('dotenv');
dotenv.load();

app.giphy = function(q, callback) {
  var api_key = process.env.GIPHY_API_KEY;
  var term = q.replace(/ /g, '+');
  var url = '';
  if (term.length > 0) {
    url = 'http://api.giphy.com/v1/gifs/random?api_key=' + api_key + '&tag=' + term;
  } else {
    url = 'http://api.giphy.com/v1/gifs/random?api_key=' + api_key;
  }
  var request = http.get( url, function (response) {
    var body = '';
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          var url = JSON.parse(body);
          callback(url.data.image_original_url);
        } catch (error) {
          console.error(error.message);
        }
      }
    });
  });
};
