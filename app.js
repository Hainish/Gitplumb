var express = require('express');
var config = require('./config');

var app = express.createServer(express.logger(), express.bodyParser());

app.get('/', function(req, res){
  res.render('index.jade');
});

app.configure(function(){
  app.use(express.static(__dirname + '/client/'));
  app.use(express.cookieParser());
  app.use(express.session({secret: config.session_secret}));
});

app.listen(config.server.port);

console.log('Gitplumb listening on port '+config.server.port);
