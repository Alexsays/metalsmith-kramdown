
var assert = require('assert');
var equal = require('assert-dir-equal');
var Metalsmith = require('metalsmith');
var kramdown = require('..');

describe('metalsmith-kramdown', function(){
  it('should convert kramdown files', function(done){
    Metalsmith('test/fixtures/basic')
      .use(kramdown({
        smartypants: true
      }))
      .build(function(err){
        if (err) return done(err);
        equal('test/fixtures/basic/expected', 'test/fixtures/basic/build');
        done();
      });
  });

  it('should allow a "keys" option', function(done){
    Metalsmith('test/fixtures/keys')
      .use(kramdown({
        keys: ['custom'],
        smartypants: true
      }))
      .build(function(err, files){
        if (err) return done(err);
        assert.equal('<p><em>a</em></p>\n', files['index.html'].custom);
        done();
      });
  });
});