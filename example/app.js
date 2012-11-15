
/**
 * Module dependencies.
 */

var express = require('express')
  , expose = require('express-expose')
  , app = express();

// middleware

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/build'));

// configure

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// expose

app.expose(function() {
  var i18n = require('p-baleine-tiny-i18n/index.js');
  i18n.ja = { 'hello': 'こんにちは世界' };
  i18n.en = { 'hello': 'Hello, world.' };
});

/**
 * expose function which set locale
 */

function locale(req, res, next) {
  var language = req.acceptedLanguages
    , ready = ['ja', 'en']
    , i, l, key;

  for (i = 0, l = language.length; i < l; i++) {
    if (~ready.indexOf(language[i])) {
      key = language[i];
      break;
    }
  }
  if (i == language.length) { key = 'en'; }
  res.expose([
    ';(function() {',
      'var i18n = require(\'p-baleine-tiny-i18n/index.js\');',
      'i18n.t = i18n("' + key + '");',
    '})();'
  ].join(''));
  next();
}

// all routes

app.get('*', locale, function(req, res) {
  res.render('index');
});

// listen

app.listen(3000);