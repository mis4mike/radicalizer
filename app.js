var express = require('express');
var app = express();

var jade = require('jade');
app.set('view engine', 'jade');
app.set('views', './app/views/');

var lessMiddleware = require('less-middleware');

app.use(lessMiddleware({
  src      : __dirname + "/public",
  compress : true
}));

//set Static file directory
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

//For each controller/module, run the setup method. Setup initializes app routes
['main', 'institutions'].map(function(controllerName) {
    var controller = require('./app/controllers/' + controllerName);
    controller.setup(app);
 });

app.listen(3003);