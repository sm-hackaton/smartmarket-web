(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('SellerController', SellerController);

    SellerController.$inject = ['$scope', '$rootScope', 'API', '$state'];
    /**
     * TodoController
     * @param $scope
     * @param $rootScope
     * @param API
     * @param $state
     * @constructor
     */
    function SellerController($scope, $rootScope, API, $state) {
        $scope.logout = logout;
        $scope.getTransactions = getTransactions;

        $scope.getTransactions();

        function logout() {
            $state.go("login");
        }

        function getTransactions() {
            /*
            $scope.loading = true;
            API.getTransactions()
                .then(function (response) {
                    $scope.devices = response.devices;
                    $scope.loading = false;
                })
                .catch(function (err) {
                    // Validacion de errores
                    $scope.loading = false;
                    console.log('error');
                });
                */
        }
    }
})();
