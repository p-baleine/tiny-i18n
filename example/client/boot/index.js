var o = require('jquery')
  , t = require('i18n');

o(function() {
  ['hello'].forEach(function(word) {
    var translated = t(word);
    console.log(word);
    o('<li>', { text: translated }).appendTo('ul');
  });
});
