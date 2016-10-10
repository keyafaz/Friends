app.controller('EditController',['$scope','$location','FriendFactory', '$routeParams',function($scope,$location, FriendFactory, $routeParams){
  	console.log($routeParams)
 	
 	var friendById= FriendFactory.fetch(function(friends_from_factory){
  			$scope.friends=friends_from_factory
  		})
 	console.log($routeParams)

 	$scope.update= function(friend){
 		console.log(friend)
 		friend._id = $routeParams.id
 		console.log(friend)
 		FriendFactory.update(friend, function(data_from_factory){
 			$location.url('/display')
 		})
 	} 
 	$scope.delete = function(friend){
 		console.log(friend)
 			console.log($routeParams)
 			friend= $routeParams.id
		FriendFactory.delete({id:friend}, function(data_from_factory){
			$location.url('/display')
		})
	} 

  	}])
  	


