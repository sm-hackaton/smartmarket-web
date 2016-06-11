(function () {
    'use strict';
    angular
        .module('todoProject')
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
