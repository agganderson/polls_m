angular.module("pollController", []).controller('pollController', function($scope, $location, $routeParams, userFactory, pollFactory){
	$scope.current_user = [];
	$scope.polls = [];

	userFact.get_user(function(info){
		// console.log(info[0].name);
		$scope.current_user = info[0].name;
	});

	$scope.addPoll = function(data){
		// console.log('hit addPoll in polls controller');
		pollFact.create($scope.newPoll, function(data){
			$scope.polls = data;
			// console.log($scope.polls);
		});
		$scope.newPoll = {};
		$location.path('/dashboard');
	}

});