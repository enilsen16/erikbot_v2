var expect = require('chai').expect;
var protection = require('../lib/protection');

describe('spam protection', function() {
  it('array.contain functions correctly', function() {
    expect([2].includes([2, 1])).to.eql(true);
    expect([1,3].includes([3])).to.eql(true);
    expect([1,2,3].includes([3,2,1])).to.eql(true);
    expect([3].includes([1])).to.eql(false);
    expect([3].includes([1,2,4])).to.eql(false);
  });

  it('matches two arrays', function() {
    expect([1,2].contains([1,2])).to.eql(true);
    expect([1,2].contains([2,1])).to.eql(true);
    expect([1,2,3].contains([2,1])).to.eql(true);
    expect([1,2].contains([2,1,3])).to.eql(false);
  });
});
