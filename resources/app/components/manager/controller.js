(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('ManagerController', ManagerController);

    ManagerController.$inject = ['$scope', '$state', '$rootScope', 'AuthenticationService'];
    /**
     * TodoController
     * @param $scope
     * @param $state
     * @param $rootScope
     * @param AuthenticationService
     * @constructor
     */
    function ManagerController($scope, $state, $rootScope, AuthenticationService) {


    }
})();
