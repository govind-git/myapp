var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'mainController',
				templateUrl: 'Partials/main.html'
			})
		.when('/list',
			{
				controller: 'listController',
				templateUrl: 'Partials/list.html'
			})
		.otherwise({redirectTo: '/'})
});

