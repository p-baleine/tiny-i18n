
/**
 * Module dependencies.
 */

var expose = require('express-expose');

/**
 * export locale
 */

exports = module.exports = locale;

function locale(locales) {
  return function(req, res, next) {
    var language = req.acceptedLanguages
      , ready = Object.keys(locales)
      , i, l, key;

    for (i = 0, l = language.length; i < l; i++) {
      if (~ready.indexOf(language[i])) {
        key = language[i];
        break;
      }
    }

    // expose i18n setup
    res.expose([
      ';(function() {',
      '  var i18n = require(\'p-baleine-tiny-i18n/index.js\');',
      '  i18n.' + key + ' = ' + JSON.stringify(locales[key]) + ';',
      '})();'
    ].join('\n'));

    // expose locale setting
    res.expose([
      ';(function() {',
      '  var i18n = require(\'p-baleine-tiny-i18n/index.js\');',
      '  i18n.t = i18n("' + key + '");',
      '})();'
    ].join('\n'));

    next();
  };
}
