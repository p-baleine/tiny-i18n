
# tiny-i18n

  Small i18n implementation similar to Thomas Fuchs's [gist: 1364216](https://gist.github.com/1364216)

## Installation

```
$ component install p-baleine/tiny-i18n
```

## API

### i18n(locale)

  Return a function which translates based on `locale`

```js
var i18n = require('tiny-i18n');

i18n.de = { // set to language, e.g. "i18n.en" or "i18n['en-US']"
  'hello': 'Hello',
  'X messages': '{{count}} Nachrichten'
};

t = i18n('de');

t('hello'); //=> 'Hello'
t('X messages', { count: 5 }); //=> '5 Nachrichten'
```

### .l(id)

  Return a specific translation string or object.

## License

  MIT
