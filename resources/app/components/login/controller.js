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
        AuthenticationService.clearCredentials();
        $rootScope.headerInLogin = true;

        $scope.login = function () {
            AuthenticationService.login($scope.username, $scope.password)
                .then(function (response) {
                    $rootScope.headerInLogin = false;
                    if (response.account.type === "manager") {
                        $state.go("manager");
                    } else if(response.account.type === "seller"){
                        $state.go("seller");
                    } else {
                        $state.go("user");
                    }

                }).catch(function (err) {
                // Validacion de errores
                console.log('error');
            });
        }

    }
})();
