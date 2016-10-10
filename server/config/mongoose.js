console.log('connected to mongoose');

var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

mongoose.connect('mongodb://localhost/angular_friends')

models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach(function(file) {
  	if(file.indexOf('.js') >= 0) {
   		require(models_path + '/' + file);
  }
});