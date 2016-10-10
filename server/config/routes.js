var mongoose = require('mongoose');
var Friends = require(__dirname + '/../controllers/friends');

console.log('future routes')

module.exports = function(app) {

	app.get('/', function(req, res){res.render('index.html')})
	app.get('/friends',  Friends.show)
	app.post('/new', Friends.create)
	app.get('/new', Friends.index)
	app.put('/edit/:id', Friends.update)
	app.delete('/friends/:id', Friends.delete)
	app.get('/makefriends', Friends.populate)
}

