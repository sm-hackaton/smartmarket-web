(function () {
    'use strict';

    angular
        .module('smartmarket-web')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', 'API', '$q'];
    function AuthenticationService($http, $cookieStore, $rootScope, API, $q) {
        var service = {};

        service.login = login;
        service.setCredentials = setCredentials;
        service.clearCredentials = clearCredentials;

        return service;

        function login(username, password) {
            var defered = $q.defer();
            var promise = defered.promise;

            API.authenticate(username, password)
                .then(function (response) {
                    $rootScope.globals = {
                        currentUser: {
                            uuid: response.account.uuid,
                            name: response.account.first_name,
                            surname: response.account.last_name,
                            username: response.account.username,
                            type: response.account.type
                        }
                    };
                    $cookieStore.put('globals', $rootScope.globals);
                    defered.resolve(response, status);
                })
                .catch(function (err) {
                    // Validacion de errores
                    console.log('error');
                    defered.reject({
                        success: false,
                        message: err.message,
                        status: err.status,
                        headers: err.headers,
                        config: err.config
                    });
                });

            return promise;
        }

        function setCredentials(email, token, rememberMe) {
            $rootScope.globals = {
                currentUser: {
                    email: email,
                    token: token,
                    rememberMe: rememberMe
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        }

        function clearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            // Borramos el sessionStorage de app
            sessionStorage.clear();
        }
    }
})();
