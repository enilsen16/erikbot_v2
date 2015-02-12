var expect = require('chai').expect;
var protection = require('../lib/protection');

describe('spam protection', function() {
  it('array.contain functions correctly', function() {
    expect([2].contains(2)).to.eql(true);
    expect([2].contains(1)).to.eql(false);
  });
});
