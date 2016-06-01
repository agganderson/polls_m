angular.module('dashboardController', []).controller('dashboardController', function($scope, $location, $routeParams, userFactory, pollFactory){
	$scope.current_user = [];
	$scope.polls = [];

	pollFact.index(function(data){
		$scope.polls = data;
		// console.log($scope.polls[0]._id);
	});

	userFact.get_user(function(info){
		$scope.current_user = info[0].name;
		// console.log($scope.current_user);
		// console.log(info[0].name);
	});

	$scope.logout = function(){
		$scope.current_user = "";
	}

	$scope.deletePoll = function(id){
		// console.log('delete poll controller');
		pollFact.delete(id, function(){

			pollFact.index(function(data){
				$scope.polls = data;
			});
		});
	}

});

