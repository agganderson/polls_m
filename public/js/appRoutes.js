angular.module("appRoutes", []).config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html'
		})
		.when('/dashboard', {
			templateUrl: 'views/dashboard.html'
		})
		.when('/create', {
			templateUrl: 'views/create.html'
		})
		.when('/poll/:id', {
			templateUrl: 'views/poll.html'
		})
		.otherwise({
			templateUrl: 'index.html'
		});
});