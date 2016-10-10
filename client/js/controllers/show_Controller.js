app.controller('showController',['$scope','FriendFactory', '$routeParams',function($scope,FriendFactory, $routeParams){
	console.log($routeParams)

	FriendFactory.fetch(function(friends_from_factory){
  		$scope.friends=friends_from_factory
  	})
	

	$scope.delete = function(index){
		var friend= $scope.friends[index];
		FriendFactory.delete({id:friend.id}, function(data_from_factory){
			
			$scope.posts.splice(index,1)
			console.log('delete successful')
		})
	} 

 }])