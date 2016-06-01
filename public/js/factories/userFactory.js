angular.module("userFactory", []).factory('userFactory', function($http){
	var factory = {};
	var current_users = [];


	factory.login = function(info, callback){
		current_users.push(info);
		// callback(current_users);
	}

	factory.get_user = function(callback){
		// callback(current_users);
	}

	return factory;
});