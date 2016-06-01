angular.module("pollController", []).controller("pollController", function($scope, $location, $routeParams, userFactory, PollFactory){
	$scope.current_user = [];
	$scope.polls = [];

	userFactory.get_user(function(info){
		// console.log(info[0].name);
		$scope.current_user = info[0].name;
	});

	$scope.addPoll = function(data){
		// console.log('hit addPoll in polls controller');
		pollFactory.create($scope.newPoll, function(data){
			$scope.polls = data;
			// console.log($scope.polls);
		});
		$scope.newPoll = {};
		$location.path('/dashboard');
	}

});