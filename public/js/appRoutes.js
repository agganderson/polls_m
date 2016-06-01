angular.module("appRoutes", []).config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html'
		})
		.when('/create', {
			templateUrl: 'partials/create.html'
		})
		.when('/poll/:id', {
			templateUrl: 'partials/poll.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});