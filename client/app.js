console.log('app.js is running')
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider){
	$routeProvider
	.when('/new', {
		templateUrl : 'partials/new.html',
		controller : 'NewController'
	})
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller : 'EditController'
	})
	.when('/display', {
		templateUrl: 'partials/show.html',
		controller: 'showController'
	})
	.otherwise({
		redirectTo: '/display'
	})
})
