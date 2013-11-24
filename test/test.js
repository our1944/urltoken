var assert = require('assert');
var urltoken = require('../index.js');
var crypto = require('crypto');
var async = require('async');
var eol = require('os').EOL;


describe('urltoken', function () {
  it('should contain no illegal chars in encoded string', function(done) {
    crypto.randomBytes(128, function(ex, buf) {
      assert.equal(ex, null);
      var orig = buf.toString('hex');
      var orig = orig.slice(0, orig.length -1);
      var illegal = ['+', '-', '='];
      var encoded = urltoken.encode(orig);
      async.each(
        illegal
        , function(item, callback) {
            assert.equal(encoded.indexOf(item), -1);  
            callback(null);
        }
        , function(err) {
            assert.equal(err, null);
            done();
        }
      );
    });
  });

  it('should be able to also decode urltoken', function(done) {
    crypto.randomBytes(128, function(ex, buf) {
      assert.equal(ex, null);
      var orig = buf.toString('hex');
      var orig = orig.slice(0, orig.length -1);
      var encoded = urltoken.encode(orig);
      var decoded = urltoken.decode(encoded);
      assert.equal(orig, decoded);
      done();
    });
  });
});
