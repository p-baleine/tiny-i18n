var should = require('chai').should()
  , i18n = require('..');

describe('tiny-i18n', function() {
  var t;

  before(function() {
    i18n.de = {
      'hello': 'Hello',
      'X messages': '{{count}} Nachrichten'
    };

    t = i18n('de');
  });

  it('should return the specieied translation string', function() {
    t('hello').should.eql('Hello');
  });

  it('should interpolate variables', function() {
    t('X messages', { count: 5 }).should.eql('5 Nachrichten');
  });
});