angular.module('thinkfulLessons').factory('lesson5Service',function($q, $http, $interpolate) {

	var lesson5Service = {
		endpoint:"https://api.instagram.com/v1/tags/{{tag}}/media/recent?client_id=1fef2060ae8a4cb58ec392adefe91d58&callback=JSON_CALLBACK",
		get: function(tag) {
			var images = $q.defer(),
				endpoint = $interpolate(lesson5Service.endpoint)({tag:tag});
			$http.jsonp(endpoint).success(function(data){
				images.resolve(data);
			}).error(function() {
				console.log("Not found")
			});
			return images.promise;
		},
		typeAhead: function(){
			var words = $q.defer();
			$http.get('lessons/lesson-5/words.json').success(function(data){
				words.resolve(data);
			});
			return words.promise;
		}
	};
	return lesson5Service;
});
