(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('ManagerController', ManagerController);

    ManagerController.$inject = ['$scope', '$state', '$rootScope', 'API'];
    /**
     * TodoController
     * @param $scope
     * @param $state
     * @param $rootScope
     * @param API
     * @constructor
     */
    function ManagerController($scope, $state, $rootScope, API) {
        $scope.getDevices = getDevices;
        $scope.showSeller = showSeller;

        $scope.getDevices();

        function getDevices() {
            $scope.loading = true;
            API.getDevices()
                .then(function (response) {
                    $scope.devices = response.devices;
                    $scope.loading = false;
                })
                .catch(function (err) {
                    // Validacion de errores
                    $scope.loading = false;
                    console.log('error');
                });
        }

        function showSeller(seller_uuid) {
            $rootScope.seller = seller_uuid;
            $state.go('seller');
        }

    }
})();
