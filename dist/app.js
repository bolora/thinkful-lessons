angular.module('thinkfulLessons', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'openWeatherApp', 'countriesCapitals']);

angular.module('thinkfulLessons').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partials/home/home.html'
    });
    $stateProvider.state('lesson-5', {
        url: '/lesson-5',
        templateUrl: 'lessons/lesson-5/lesson-5.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');
    

});

angular.module('thinkfulLessons').run(function($rootScope, $state) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    console.log($state);

});
