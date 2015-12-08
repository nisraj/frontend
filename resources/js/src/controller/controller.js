angular.module("userApp").controller("HomeCtrl", [ '$scope', function($scope) {
} ]);

// Controller for All Users View
angular.module("userApp").controller("ResultCtrl",
		[ '$scope', 'userservice', function($scope, userservice) {
			var userList = [];
			console.log({
				pro : userservice.getUser.query({}).$promise
			});
			pro: userservice.getUser.query({}).$promise.then(function(dataIn) {
				console.log({
					dataIn : dataIn
				});
				userList = dataIn;
			}, function(errorIn) {
				console.log({
					errorIn : errorIn
				});
				userList = errorIn;
			});
			$scope.getUsers = function() {
				return userList;
			}

		} ]);
angular.module("userApp").controller(
		"NewUserCtrl",
		[
				'$scope',
				'userservice',
				function($scope, userservice) {
					$scope.createNewUser = function() {
						var newuser = {
							'name' : $scope.name,
							'email' : $scope.email
						};
						pro: userservice.saveUser.query(newuser).$promise.then(
								function(dataIn) {
									console.log({
										dataIn : dataIn
									});
									$scope.name = "";
									$scope.email = "";
									$scope.saved = "Successfully saved."
								}, function(errorIn) {
									console.log({
										errorIn : errorIn
									});
								});
					};
				} ]);
