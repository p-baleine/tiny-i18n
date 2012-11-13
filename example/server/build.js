
/**
 * Module dependencies.
 */

var exec = require('child_process').exec
  , fs = require('fs')
  , mm = require('minstache');

/**
 * i18n component path
 */

var i18n = __dirname + '/../client/i18n';

/**
 * locales
 */

var locales = fs.readdirSync(i18n + '/locales');

/**
 * template
 */

var template = fs.readFileSync(i18n + '/i18n-template.js', 'utf-8');

/**
 * Build components.
 *
 * @api public
 */

module.exports = function(req, res, next) {
  var i, j, regexp, locale;

  for (i = 0; i < req.acceptedLanguages.length; i++) {
    regexp = new RegExp('(' + req.acceptedLanguages[i] + ')\.js');

    for (j = 0; j < locales.length; j++) {
      locale = locales[j];

      if ((locale = locale.match(regexp))) {
        return writeLocale(locale[1], next);
      }
    }
  }

  return writeLocale('en', next);
};

function writeLocale(locale, next) {
  fs.writeFile(i18n + '/index.js', mm(template, { locale: locale }), function(err) {
    if (err) { return next(err); }
    return exec('make', next);
  });
}