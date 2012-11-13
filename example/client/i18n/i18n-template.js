/**
 * Module dependencies
 */

var i18n = require('tiny-i18n');

/**
 * setup
 */

i18n.{{locale}} = require('./locales/{{locale}}');

/**
 * exports
 */

exports = module.exports = i18n('{{locale}}');
