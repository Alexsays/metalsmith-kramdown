
var basename = require('path').basename;
var debug = require('debug')('metalsmith-kramdown');
var dirname = require('path').dirname;
var extname = require('path').extname;
var kramed = require('kramed');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to convert kramdown files.
 *
 * @param {Object} options (optional)
 *   @property {Array} keys
 * @return {Function}
 */

function plugin(options){
  options = options || {};
  var keys = options.keys || [];

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      if (!kramdown(file)) return;
      var data = files[file];
      var dir = dirname(file);
      var html = basename(file, extname(file)) + '.html';
      if ('.' != dir) html = dir + '/' + html;

      debug('converting file: %s', file);
      var str = kramed(data.contents.toString(), options);
      data.contents = new Buffer(str);
      keys.forEach(function(key) {
        data[key] = kramed(data[key], options);
      });

      delete files[file];
      files[html] = data;
    });
  };
}

/**
 * Check if a `file` is kramdown.
 *
 * @param {String} file
 * @return {Boolean}
 */

function kramdown(file){
  return /\.md|\.kramdown/.test(extname(file));
}
