(function () {
    'use strict';
    angular
        .module('todoProject')
        .config(URLConfig)
        .config(InitialConfiguration);

    URLConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    /**
     * Configuración de URLs
     * @param $stateProvider
     * @param $locationProvider
     * @param $urlRouterProvider
     * @param helper
     * @constructor
     */
    function URLConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: helper.basepath('components', 'login'),
                controller: 'LoginController'
            }).state('home', {
                url: '/home',
                templateUrl: helper.basepath('components', 'home'),
                controller: 'HomeController'
            });
    }

    InitialConfiguration.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    /**
     * Configuración inicial
     * @param $controllerProvider
     * @param $compileProvider
     * @param $filterProvider
     * @param $provide
     * @constructor
     */
    function InitialConfiguration($controllerProvider, $compileProvider, $filterProvider, $provide) {
        angular.module('todoProject').controller = $controllerProvider.register;
        angular.module('todoProject').directive = $compileProvider.directive;
        angular.module('todoProject').filter = $filterProvider.register;
        angular.module('todoProject').factory = $provide.factory;
        angular.module('todoProject').service = $provide.service;
        angular.module('todoProject').constant = $provide.constant;
        angular.module('todoProject').value = $provide.value;
    }
})();
