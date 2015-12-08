angular.module("userApp").service('userservice', function($resource) {
	return {
		getUser : $resource('http://localhost:8080/user', {}, {
			query : {
				method : 'GET',
				params : {},
				isArray : true,
				transformResponse : function(dataIn) {
					console.log({
						dataIn : dataIn
					});
					return angular.fromJson(dataIn);
				}
			}
		}),
		saveUser : $resource('http://localhost:8080/user', {}, {
			query : {
				method : 'POST',
				params : {},
				isArray : true,
				transformResponse : function(dataIn) {
				}
			}
		})
	};

});