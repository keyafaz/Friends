var mongoose   = require('mongoose');
var path 	   = require('path');
var bodyParser = require('body-parser');
var express    = require('express');
var app 	   = express();

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/partials')));
app.use(express.static(path.join(__dirname, './client/static')));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);



app.listen(8000, function() {
    console.log("listening on port 8000");
})
