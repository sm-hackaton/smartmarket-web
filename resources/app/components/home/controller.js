(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$rootScope', 'API', '$state'];
    /**
     * TodoController
     * @param $scope
     * @param $rootScope
     * @param API
     * @param $state
     * @constructor
     */
    function HomeController($scope, $rootScope, API, $state) {
        $scope.logout = logout;

        function logout() {
            $state.go("login");
        }
    }
})();
