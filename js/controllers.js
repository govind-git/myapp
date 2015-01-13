var controllers = {};

controllers.loginController = function($scope) {
	$scope.name="mainController";
};

controllers.listController = function($scope) {
	$scope.name="listController";
};

myApp.controller(controllers);