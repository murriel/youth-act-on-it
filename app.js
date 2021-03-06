
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var handlebars = require('express3-handlebars');
var app = express();

app.engine('handlebars',handlebars({defaultLayout:'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.bodyParser({limit: '50mb'}));

// all environments
app.set('port', process.env.PORT || config.port);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes/views')(app);
require('./routes/services')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
