
/**
 * Module dependencies.
 */

var mm = require('minstache');

/**
 * Expose `i18n()`
 */

exports = module.exports = i18n;

/**
 * Return a function which translates based on `locale`
 * @param {String} locale
 * @return {Function}
 * @api public
 */

function i18n(locale) {
  // normalize locale string
  var parts = locale.split('-');
  i18n.locale = parts[0].toLowerCase() + (parts.length > 1 ? parts[0].toUpperCase() : '');

  function t(id, vars) {
    var translated = translation(id);
    vars = vars || {};
    if (!t) {
      translated = (i18n.en && i18n.en[id]) || '(?) ' + id;
      log('missing [' + i18n.locale + '] ' + id);
    }
    return mm(translated, vars);
  };

  // export `t` method for later use.
  i18n.t = t;

  return t;
}

/**
 * Return a specific translation string or object.
 * @param {Mixed} id
 * @return {Mixed}
 * @api public
 */

i18n.l = function(id) {
  return translation(id) || i18n.en[id];
};

/**
 * Return a specific translation string or object.
 * @param {Mixed} id
 * @return {Mixed}
 * @api private
 */

function translation(id) {
  var locale;

  return ((locale = i18n[i18n.locale]) && locale[id]) ||
        ((locale = i18n[i18n.locale.slice(0, 2)]) || locale[id]);
}

/**
 * logging
 * @param {String} message
 * @api private
 */

function log(message) {
  console && is.function(console.log) && console.log('missing [' + i18n.locale + '] ' + id);
}

// `t` is not yet ready at this point
i18n.t = function() {
  log('please setup tiny-i18n');
};
