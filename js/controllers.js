var controllers = {};

controllers.MainController = function($scope) {
	$scope.name="mainController";
};

controllers.LoginController = function($scope, $location) {
	$scope.name="Login";
	$scope.loginSubmit = function() {
		console.info($scope.login);
		if ($scope.login.username == 'admin' && $scope.login.password == 'admin') {
			$location.path('list');
		}
		else {
			$location.path('register');
		}
	}
};

controllers.RegisterController = function($scope) {
	$scope.name="Registration";
	$scope.reset = function() {
		$scope.login = {};
	}
};

controllers.ListController = function($scope) {
	$scope.name="users List";
	$scope.users = [
		{name: 'user1', designation:'Associate'},
		{name: 'user2', designation:'Sr. Associate'},
		{name: 'user3', designation:'Sr. Associate'},
		{name: 'user4', designation:'Associate'},
		{name: 'user5', designation:'Architect'}
	];
};

myApp.controller(controllers);