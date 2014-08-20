angular.module('openWeatherApp').factory('citiesList',function($http,$q,$timeout) {
	var endpoints = [
			{
				apiUrl:"http://api.geonames.org/countryInfoJSON?username=bolora&callback=JSON_CALLBACK",
				collection: "world"
			},
			{
				apiUrl:"http://api.geonames.org/searchJSON?username=bolora&country=US&cities=cities15000&callback=JSON_CALLBACK",
				collection: "us"
			}
		],
		citiesList = [],
		rawData = [],
		promises = [],
		toResolve = [],
		thenFn = function(value){
	        //console.log('resolved ', value);
	        return value;
	    };

	_.each(endpoints, function(ep,index){
		rawData[index] = $q.defer();
		promises[index] = rawData[index].promise;
		toResolve[index] = promises[index].then(thenFn);
		$timeout( function() {
			$http.jsonp(ep.apiUrl, {cache:true}).success(function(response){
				var citiesData = [],cityKey = "name", codeKey = "adminCode1";
				if(ep.collection === "world") {
					cityKey = "capital";
					codeKey = "countryCode";
				}
				citiesData = _.map(response.geonames, function(placeObj){ 
					if(!placeObj[cityKey]) {
						placeObj[cityKey] = placeObj.countryName;
					}
					var cityObj = {
						name: placeObj[cityKey],
						code: placeObj[codeKey],
						searchText: placeObj[cityKey]+", "+placeObj[codeKey],
						country:placeObj.countryName
					};
					return cityObj;
				});
				rawData[index].resolve(citiesData);
			});
		});

	});
	citiesList = $q.all(toResolve).then(function(values){
		//join arrays in values = [world,us]
		console.log("All values have been resolve?",_.union(values[0],values[1]));
		return _.sortBy(_.union(_.union(values[0],values[1])),'city');
	});	
	return citiesList;
});

