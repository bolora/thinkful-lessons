angular.module('openWeatherApp').factory('owApi',function($q, $http) {

	var owApi = {
		endpoint:"//api.openweathermap.org/data/2.5/{searchType}?q={locationSearch}&callback=JSON_CALLBACK",
		getCurrent: function(locationSearch) {
			var currentWeather = $q.defer(),
				endpoint = owApi.endpoint.replace(/\{searchType\}/,"weather").replace(/\{locationSearch\}/,encodeURIComponent(locationSearch));
			$http.jsonp(endpoint, {cache:true}).success(function(data){
				currentWeather.resolve(data);
			});
			return currentWeather.promise;
		},
		getForecast: function(locationSearch) {
			var forecastWeather = $q.defer(),
				endpoint = owApi.endpoint.replace(/\{searchType\}/,"forecast").replace(/\{locationSearch\}/,encodeURIComponent(locationSearch));
			$http.jsonp(endpoint, {cache:true}).success(function(data){
				data.list = data.list.slice(0, 4);
				forecastWeather.resolve(data);
			});
			return forecastWeather.promise;
		},

	};
	return owApi;
});