var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('index',
			{
				url: "/index",
				controller: 'MainController',
				templateUrl: 'Partials/main.html'
			})
		.state('login',
			{
				url: "/login",
				controller: 'LoginController',
				templateUrl: 'Partials/login.html'
			})
		.state('register',
			{
				url: "/register",
				controller: 'RegisterController',
				templateUrl: 'Partials/register.html'
			})
		.state('list',
			{
				url: "/list",
				controller: 'ListController',
				templateUrl: 'Partials/list.html'
			})
		$urlRouterProvider.otherwise('/index')
});

