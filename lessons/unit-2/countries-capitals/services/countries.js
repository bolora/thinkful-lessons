angular.module('countriesCapitals').factory('countries',function($q,$http) {
	var endpoint = "http://api.geonames.org/countryInfoJSON?username=bolora&callback=JSON_CALLBACK",
	countries = $q.defer();
	$http.jsonp(endpoint, {cache:true}).success(function(data){
		countries.resolve(data);
	});
	return countries.promise;
});
