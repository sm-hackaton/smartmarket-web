(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state'];
    /**
     * TodoController
     * @param $scope
     * @constructor
     */
    function LoginController($scope, $state) {

        $scope.login = function(){
            $state.go("home")
        }

    }
})();
