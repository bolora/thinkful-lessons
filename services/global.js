angular.module('thinkfulLessons').factory('httpGateway',function($http,$q) {

	return function(url, params){
		return $http(url,params);
	};

});