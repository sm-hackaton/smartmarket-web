(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .constant('BASEPATH', {
            apiURL: '@@apiURL',
            webURL: '@@webURL'
        });
})();
