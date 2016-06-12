(function () {
    'use strict';
    angular
        .module('smartmarket-web', [
            'ui.router',
            'ngRoute',
            'ngLodash',
            'ngCookies'
        ])
        .run(['$rootScope', '$state', '$stateParams', '$window', '$location', '$cookieStore',
            function ($rootScope, $state, $stateParams, $window, $location, $cookieStore) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$storage = $window.localStorage;

                $rootScope.globals = $cookieStore.get('globals') || {};

                $rootScope.$on('$locationChangeStart', function (event, next, current) {
                    //Comprobamos si está logueado
                    var path = $location.path();
                    if (!$rootScope.globals.currentUser && path !== '/login') {
                        $location.path('/page/login');
                    }
                });
            }]);
})();
