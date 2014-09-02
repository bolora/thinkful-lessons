angular.module('countriesCapitals', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'datatables']);

angular.module('countriesCapitals').config(function($stateProvider) {

    $stateProvider.state('countryList', {
        url: '/countries-capitals/list',
        templateUrl: 'lessons/unit-2/countries-capitals/country-list/country-list.html'
    });
    $stateProvider.state('countryDetails', {
        url: '/countries-capitals/:countryCode/details',
        templateUrl: 'lessons/unit-2/countries-capitals/country-details/country-details.html'
    });
    $stateProvider.state('countriesHome', {
        url: '/countries-capitals/home',
        templateUrl: 'lessons/unit-2/countries-capitals/countries-home/countries-home.html'
    });
    /* Add New States Above */

}).run(function ($rootScope, content) {
	$rootScope.content = content;
	$rootScope.lessonDescription = "Unit 2, Countries and Capitals";
});

