app.controller('NewController', ['$scope','$location','FriendFactory', function($scope, $location, FriendFactory) {
  console.log($scope.friend)
  $scope.create= function(){
    FriendFactory.create($scope.friend, function(data_from_factory){
      console.log(data_from_factory)
      $location.url('/display')
    });
  }

}]);


