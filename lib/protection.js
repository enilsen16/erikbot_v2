var app = exports = module.exports = {};
var dotenv = require('dotenv');
dotenv.load();

Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};
