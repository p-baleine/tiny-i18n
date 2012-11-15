
/**
 * Module dependencies.
 */

var express = require('express')
  , locale = require('./server/locale')
  , locales = require('./server/locales.json')
  , app = express();

// middleware

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/build'));
app.use(locale(locales));

// configure

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// all routes

app.get('*', function(req, res) {
  res.render('index');
});

// listen

app.listen(3000);