(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('Sellerontroller', Sellerontroller);

    Sellerontroller.$inject = ['$scope', '$rootScope', 'API', '$state'];
    /**
     * TodoController
     * @param $scope
     * @param $rootScope
     * @param API
     * @param $state
     * @constructor
     */
    function Sellerontroller($scope, $rootScope, API, $state) {
        $scope.logout = logout;

        function logout() {
            $state.go("login");
        }
    }
})();
