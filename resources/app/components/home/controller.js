(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];
    /**
     * TodoController
     * @param $scope
     * @constructor
     */
    function HomeController($scope) {
        console.log('test');
    }
})();
