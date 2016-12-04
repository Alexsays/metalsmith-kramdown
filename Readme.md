
# metalsmith-kramdown

  A Metalsmith plugin to convert kramdown files.

## Installation

    $ npm install metalsmith-kramdown

## CLI Usage

  Install via npm and then add the `metalsmith-kramdown` key to your `metalsmith.json` plugins with any [kramed](https://github.com/GitbookIO/kramed) options you want, like so:

```json
{
  "plugins": {
    "metalsmith-kramdown": {
      "smartypants": true,
      "gfm": true,
      "tables": true
    }
  }
}
```

## Javascript Usage

  Pass `options` to the kramdown plugin and pass it to Metalsmith with the `use` method:

```js
var kramdown = require('metalsmith-kramdown');

metalsmith.use(kramdown({
  smartypants: true,
  gfm: true,
  tables: true
}));
```

## Credits

originated as fork of
[segmentio/metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown)
updated to support kramdown by [dancork](https://github.com/dancork)

## License

  MIT
