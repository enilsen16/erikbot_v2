var app = exports = module.exports = {};
var dotenv = require('dotenv');
dotenv.load();

Array.prototype.includes = function(array) {
  for ( var i = 0; i < this.length; i++) {
    for ( var k = 0; k < array.length; k++) {
      if ( this[i] == array[k]) {
        return true;
      }
    }
  }
  return false;
};

Array.prototype.contains = function(array) {
  var arr1 = this.sort();
  var arr2 = array.sort();
  var i = arr1.length;
  if ( i < arr2.length ) {
    return false;
  }
  while (i--) {
    if (arr1[i] === arr2[i]) {
      return true;
    }
  }
  return false;
};
