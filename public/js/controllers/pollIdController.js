angular.module("pollIdController", []).controller('pollIdController', function($scope, $location, $routeParams, pollFactory, userFactory){
	$scope.poll = [];
	$scope.current_user = [];
	$scope.option1vote = 0;
	// console.log('in polls id controller');
	userFact.get_user(function(info){
		// console.log(info[0].name);
		$scope.current_user = info;
	});

	$scope.get_poll = function(id){
		var location = '/poll/' + id;
		$location.path(location);
	}

	pollID = $routeParams.id
	pollFact.getThisPoll(pollID, function(data){
		$scope.poll = data;
		// console.log($scope.poll);
	});

	$scope.addVote1 = function(id){
		// console.log('in upOption1Vote controller');
		pollFact.upOption1Vote(id, function(data){
			$scope.option1vote = data;

			pollFact.getThisPoll(pollID, function(vote){
				$scope.poll = vote;
		// console.log($scope.poll);
			});
		});
	}

	$scope.addVote2 = function(id){
		pollFact.upOption2Vote(id, function(data){
			$scope.option2vote = data;

			pollFact.getThisPoll(pollID, function(vote){
				$scope.poll = vote;
			});
		});
	}

	$scope.addVote3 = function(id){
		pollFact.upOption3Vote(id, function(data){
			$scope.option3vote = data;

			pollFact.getThisPoll(pollID, function(vote){
				$scope.poll = vote;
			});
		});
	}

	$scope.addVote4 = function(id){
		pollFact.upOption4Vote(id, function(data){
			$scope.option4vote = data;

			pollFact.getThisPoll(pollID, function(vote){
				$scope.poll = vote;
			});
		});
	}
	
});
