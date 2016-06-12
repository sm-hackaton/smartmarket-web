(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', '$rootScope', 'AuthenticationService'];
    /**
     * TodoController
     * @param $scope
     * @param $state
     * @param $rootScope
     * @param AuthenticationService
     * @constructor
     */
    function LoginController($scope, $state, $rootScope, AuthenticationService) {
        

    }
})();
