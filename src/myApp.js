angular.module('my.app', [])

.controller('FoodController', function($scope, FoodService){
	FoodService.then(function(val) {
		$scope.recipes = val;
	})
	$scope.activeRecipeIndex = 0;

	$scope.good = function () {
		$scope.recipes[$scope.activeRecipeIndex++].keep = true;
	}
	$scope.notGood = function () {
		$scope.recipes[$scope.activeRecipeIndex++].keep = false;
	}
})

.service('FoodService', function ($q, $http) {
	var deferred = $q.defer();

	$http.get('/food.json').success(function (data) {
		deferred.resolve(data);
	})

	return deferred.promise;
})




