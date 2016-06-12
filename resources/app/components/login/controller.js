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
        // AuthenticationService.clearCredentials();
        $rootScope.headerInLogin = true;
        debugger

        $scope.login = function () {
            AuthenticationService.login($scope.username, $scope.password)
                .then(function () {
                    $rootScope.headerInLogin = false;
                    $state.go("seller");
                }).catch(function (err) {
                // Validacion de errores
                console.log('error');
            });
        }

    }
})();
