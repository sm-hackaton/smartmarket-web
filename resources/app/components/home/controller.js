(function () {
    'use strict';
    angular
        .module('todoProject')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$rootScope'];
    /**
     * TodoController
     * @param $scope
     * @constructor
     */
    function HomeController($scope, $rootScope) {

    }
})();
