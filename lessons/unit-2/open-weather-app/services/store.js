angular.module('openWeatherApp').factory('owaStore',function() {

	var prefix = "__owa__",
	store = function(key,value){
		if(value) {
			localStorage[prefix+key] = JSON.stringify(value);
			return value;
		} else if(localStorage[prefix+key]) {
			return JSON.parse(localStorage[prefix+key]);
		} else if(value === null) {
			delete localStorage[prefix+key];
			return undefined;
		} else {
			return undefined; 
		}
	};

	return store;
});