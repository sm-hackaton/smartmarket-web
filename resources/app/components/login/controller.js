(function () {
    'use strict';
    angular
        .module('todoProject')
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
