angular.module("pollFactory", []).factory("pollFactory", function($http){
	var factory = {};
	var polls = [];

	factory.index = function(callback){
		$http.get('/polls').success(function(output){
			polls = output;
			callback(polls);
		});
	}

	factory.create = function(info, callback){
		// console.log('hit create in polls factory');
		$http.post('/polls', info).success(function(output){
			// console.log(output);
			polls.push(output);
			// console.log(polls);
			factory.index(callback);
			// callback();
		})
	}

	factory.get_poll = function(id, callback){
		$http.get('/polls/' + id).success(function(output){
			// polls = output;
			// console.log(polls);
			callback(output);
		});
	}

	factory.getThisPoll = function(id, callback){
		$http.get('/getPoll/' + id).success(function(output){
			callback(output);
		});
	}

	factory.upOption1Vote = function(id, callback){
		// console.log('in upOption1Vote factory');
		$http.post('/upOption1Vote/' + id).success(function(output){
			callback(output);
		});
	} 

	factory.upOption2Vote = function(id, callback){
		$http.post('/upOption2Vote/' + id).success(function(output){
			callback(output);
		});
	}

	factory.upOption3Vote = function(id, callback){
		$http.post('/upOption3Vote/' + id).success(function(output){
			callback(output);
		});
	}

	factory.upOption4Vote = function(id, callback){
		$http.post('/upOption4Vote/' + id).success(function(output){
			callback(output);
		});
	}

	factory.delete = function(id, callback){
		// console.log('in delete poll factory');
		$http.post('/deletePoll/' + id).success(function(output){
			// console.log('back from route and back end delete poll');
			callback(output);
		});
	}

	return factory;
});