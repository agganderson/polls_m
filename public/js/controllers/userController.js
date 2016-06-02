angular.module("userController", []).controller("userController", function($scope, $location, $routeParams, userFactory){
	$scope.current_users = [];

	$scope.loginUser = function(data){
		userFactory.login($scope.newUser, function(data){
			$scope.current_users = data;
			console.log($scope.current_users);
		});

		$scope.newUser = {};
		$location.path('/dashboard');
	}

	$scope.logout = function(){
		$scope.current_user = "";
	}
});