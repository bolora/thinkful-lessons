angular.module('openWeatherApp', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('openWeatherApp').config(function($stateProvider) {

    $stateProvider.state('owaHome', {
        url: '/lessons/unit-2/open-weather-app',
        templateUrl: 'lessons/unit-2/open-weather-app/partials/home/home.html'
    });
    $stateProvider.state('locationSearch', {
        url: '/lessons/unit-2/open-weather-app/:locationSearch',
        templateUrl: 'lessons/unit-2/open-weather-app/partials/location-search/location.html'
    });
    /* Add New States Above */

});

