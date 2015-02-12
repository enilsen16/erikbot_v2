var expect = require('chai').expect;
var image = require('../lib/image');

describe('image', function() {
  it('is a valid gif', function(done) {
    image.giphy("whassup", function(url) {
      expect(url).to.contain('http:');
      expect(url).to.not.be.undefined();
      expect(url).to.contain('.gif');
      done();
    });
  });
});
