angular.module("userApp").config(function($routeProvider) {
	$routeProvider.when('/users/new', {
		controller : 'NewUserCtrl',
		templateUrl : 'user.html'
	}).when('/users', {
		controller : 'ResultCtrl',
		templateUrl : 'result.html'
	});
});