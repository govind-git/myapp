var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('index',
			{
				url: "/index",
				//controller: 'mainController',
				templateUrl: 'Partials/main.html'
			})
		.state('index.login',
			{
				url: "/login",
				//controller: 'loginController',
				templateUrl: 'Partials/login.html'
			})
		.state('index.register',
			{
				url: "/login",
				//controller: 'loginController',
				templateUrl: 'Partials/register.html'
			})
		.state('list',
			{
				url: "/list",
				controller: 'listController',
				templateUrl: 'Partials/list.html'
			})
		$urlRouterProvider.otherwise('/index')
});

