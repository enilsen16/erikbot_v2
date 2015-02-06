var expect = require('chai').expect;
var logic = require('../lib/logic');

describe('logic', function() {
  it('is a valid gif', function() {
    var yeah = logic.giphy('yeah');
    expect(yeah).to.contain('http:');
    expect(yeah).to.contain('.gif');
  });
});
