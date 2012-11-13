
/**
 * Module dependencies.
 */

var express = require('express')
  , build = require('./server/build')
  , app = express();

// configure

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/build'));

app.all('*', build, function(req, res) {
  res.sendfile('index.html');
});

// bind

app.listen(3000);
