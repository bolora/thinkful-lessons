angular.module('openWeatherApp', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('openWeatherApp').config(function($stateProvider) {

    $stateProvider.state('open-weather-app', {
        url: '/lessons/unit-2/open-weather-app',
        templateUrl: '/lessons/unit-2/open-weather-app/partials/home/home.html'
    });
    /* Add New States Above */

});

