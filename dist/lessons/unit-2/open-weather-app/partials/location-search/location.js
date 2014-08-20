angular.module('openWeatherApp').controller('LocationCtrl',function($scope,$state,owApi){
	$scope.title = _.str.titleize($state.params.locationSearch);
	owApi.getCurrent($state.params.locationSearch).then(function(currentWeather){
		$scope.currentWeather = currentWeather;
	});
	owApi.getForecast($state.params.locationSearch).then(function(forecastWeather){
		$scope.forecastWeather = forecastWeather;
	});

});