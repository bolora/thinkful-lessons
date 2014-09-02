angular.module('countriesCapitals').factory('countryDetails',function($q,$http) {
	return function(country) {
		console.log("Country????",country)
		var endpoint = "http://api.geonames.org/neighboursJSON?geonameId="+country.geonameId+"&username=bolora&callback=JSON_CALLBACK",
		countryDetails = $q.defer();
		$http.jsonp(endpoint, {cache:true}).success(function(data){
			var countryDetailsObj = country;
			country.neigborsCount = data.totalResultsCount;
			country.neighbors = data.geonames;
			countryDetails.resolve(countryDetailsObj);
		});
		return countryDetails.promise;		
	}
});