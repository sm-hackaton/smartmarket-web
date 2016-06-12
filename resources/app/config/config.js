(function () {
    'use strict';
    angular
        .module('smartmarket-web')
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
            }).state('seller', {
                url: '/seller',
                templateUrl: helper.basepath('components', 'seller'),
                controller: 'SellerController'
            }).state('manager', {
                url: '/manager',
                templateUrl: helper.basepath('components', 'manager'),
                controller: 'ManagerController'
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
        angular.module('smartmarket-web').controller = $controllerProvider.register;
        angular.module('smartmarket-web').directive = $compileProvider.directive;
        angular.module('smartmarket-web').filter = $filterProvider.register;
        angular.module('smartmarket-web').factory = $provide.factory;
        angular.module('smartmarket-web').service = $provide.service;
        angular.module('smartmarket-web').constant = $provide.constant;
        angular.module('smartmarket-web').value = $provide.value;
    }
})();
