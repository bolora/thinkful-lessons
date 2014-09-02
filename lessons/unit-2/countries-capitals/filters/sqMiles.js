angular.module('countriesCapitals').filter('sqMiles', function() {
	return function(input,arg) {
		return input / 1.64;
	};
});