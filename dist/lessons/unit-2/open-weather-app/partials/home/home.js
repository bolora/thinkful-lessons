angular.module('openWeatherApp').controller('homeCtrl',function($scope, $rootScope, citiesList, owaStore, $anchorScroll, $location){
	$rootScope.lessonDescription = "Unit 2, Open Weather App";

	$scope.selectedCities = owaStore("selectedCities");

	citiesList.then(function(data){
		$scope.citiesList = _.reject(_.pluck(data,'searchText'), function(city){
			return _.contains($scope.selectedCities, city);
		});
		if(!$scope.selectedCities) {
			$scope.selectedCities = false;
			$scope.noCitiesSelected = _.sample($scope.citiesList,4);
		} else {
			$scope.noCitiesSelected = false;
		}
	});
	$scope.addCity = function(newCity) {
		//remove city from type ahead list
		$scope.citiesList = _.reject($scope.citiesList, function(city){
			return _.contains($scope.selectedCities, city);
		});
		if(!$scope.selectedCities) {
			$scope.selectedCities =[];
		}
		$scope.selectedCities.push(newCity);
		$scope.newCity = "";
		$scope.noCitiesSelected = false;
		owaStore("selectedCities",$scope.selectedCities);
		$rootScope.safeApply();			
		$location.hash('top');
		$anchorScroll();
	};
	$scope.removeCity = function(cityToRemove){
		$scope.citiesList = _.reject($scope.citiesList, function(city){
			return cityToRemove === city;
		});
	};
});