angular.module('thinkfulLessons').controller('Lesson5Ctrl',function($scope, $rootScope, lesson5Service){
	$rootScope.lessonDescription = "Lesson 5, Instagram API";
	$scope.search = function() {
		var searchTerm = $scope.searchTerm;
		lesson5Service.get(searchTerm).then(function(response){
			$scope.images = response.data;
			$scope.recap = 'showing '+response.data.length+' results for "'+searchTerm+'"';
		});
		$scope.searchTerm = "";	
	};
	lesson5Service.typeAhead().then(function(words){
		$scope.words = words;
	});
	$scope.typeAhead = function() {
		if($scope.searchTerm.length>2) {
			$scope.showTypeAhead = true;
		} else {
			$scope.showTypeAhead = false;
		}
	};
	$scope.select = function() {
		$scope.searchTerm = this.word;
		$scope.showTypeAhead = false;
		$scope.search();
	};

	$scope.searchTerm = "cats";
	$scope.search();

});