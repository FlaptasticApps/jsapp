const assert = require('chai').assert;

describe('App', function() {
  // beforeEach(function(x) {
  //   this.skip();
  // });

  it('Sanity check1', function() {
    assert.equal(1, 1);
  })
  it('Sanity check2', function() {
    assert.equal(2, 2);
  })
  it('Sanity check3', function() {
    assert.equal(3, 3);
  })
  it('My broken test', function() {
    assert.equal(1, 2);
  }) 
});
