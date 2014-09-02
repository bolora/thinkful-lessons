angular.module('countriesCapitals').controller('countryDetailsCtrl',function($scope,$state, countries, countryDetails){

	countries.then(function(data){
		var found;
		_.each(data.geonames,function(c){
			if(c.countryCode === $state.params.countryCode && !found) {
				countryDetails(c).then(function(countryData){
					$scope.countryDetails = countryData;
				});
				found = true;
			};
		});
	});

});