console.log('Friends Factory');
app.factory('FriendFactory', function($http){
	
	var factory = {};
	var friends=[];
	
	
	factory.create = function(friend, cb){
		console.log(friend);
		$http.post('/new', friend).success(function(returned_data_aka_response){
			cb(returned_data_aka_response);
		})
	};
	factory.index= function(cb){
		callback(friends);
	}

	factory.update = function(friend,cb){
		$http.put('/edit/' +friend._id, friend).success(function(data_from_server){
			cb(data_from_server)
		})	
		
	
	},
	factory.fetch= function(cb){
		$http.get('/friends').success(function(friends_from_server_controller){
			cb(friends_from_server_controller)
		})
	}
	factory.delete=function(friend,cb){
		$http.delete('/friends/' +friend.id).success(function(data_from_server){
			cb(data_from_server)
		})

	}

	return factory;
})