angular.module('userController', []).controller("userController") function($scope, $location, $routeParams, userFactory){
	$scope.current_users = [];

	$scope.loginUser = function(data){
		userFact.login($scope.newUser, function(data){
			$scope.current_users = data;
		});

		$scope.Newuser = {};
		$location.path('/dashboard');
	}
});