var app = exports = module.exports = {};
var http = require('http');
var dotenv = require('dotenv');
dotenv.load();

app.giphy = function(q, callback) {
  var api_key = process.env.GIPHY_API_KEY;
  var request = http.get('http://api.giphy.com/v1/gifs/random?api_key=' + api_key + '&tag=' + q, function (response) {
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