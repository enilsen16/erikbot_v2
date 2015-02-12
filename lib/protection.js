var app = exports = module.exports = {};
var dotenv = require('dotenv');
dotenv.load();

//https://stackoverflow.com/questions/237104/array-containsobj-in-javascript

Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};
