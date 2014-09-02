angular.module('countriesCapitals').controller('CountryListCtrl',function($scope, $state, countries, DTOptionsBuilder, DTColumnDefBuilder){

	countries.then(function(data){
		$scope.countries = data.geonames;
		$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
	    $scope.dtColumnDefs = [
	        DTColumnDefBuilder.newColumnDef(0),
	        DTColumnDefBuilder.newColumnDef(1).notVisible(),
	        DTColumnDefBuilder.newColumnDef(2).notSortable()
	    ];
	});

    $scope.goToDetails = function(country) {
    	$state.go("countryDetails", {countryCode:country.countryCode});
    };

});