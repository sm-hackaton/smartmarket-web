(function () {
    'use strict';
    angular
        .module('todoProject')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', '$rootScope'];
    /**
     * TodoController
     * @param $scope
     * @constructor
     */
    function LoginController($scope, $state, $rootScope) {
        $rootScope.headerInLogin = true;

        $scope.login = function(){
            $state.go("home")
            $rootScope.headerInLogin = false;
        }

    }
})();
