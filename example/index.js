
/**
 * Module dependencies
 */

var domify = require('domify')
  , t = require('tiny-i18n').t;

var container = document.querySelector('#container')
  , dom = domify('<li>' + t('hello') + '</li>');

container.appendChild(dom);