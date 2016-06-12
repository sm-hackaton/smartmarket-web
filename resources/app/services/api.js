(function() {
    angular
        .module('smartmarket-web')
        .service('API', API);

    API.$inject = ['$http', '$q'];

    function API($http, $q) {
        var baseURL = "http://localhost:8080";
        var service = {
            authenticate: authenticate,
            getAccounts: getAccounts,
            getDevices: getDevices,
            getTransactions: getTransactions
        };

        return service;

        function authenticate(username, password) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.post(baseURL + '/auth', {username: username, password: password})
                .success(function(response, status) {
                    defered.resolve(response, status);
                })
                .error(function(response, status, headers, config) {
                    defered.reject({
                        success: false,
                        message: response ? response.error : '',
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            return promise;
        }

        function getAccounts() {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get(baseURL + '/accounts')
                .success(function(response, status) {
                    defered.resolve(response, status);
                })
                .error(function(response, status, headers, config) {
                	defered.reject({
                        success: false,
                        message: response ? response.error : '',
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
        	return promise;
        }

        function getDevices() {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get(baseURL + '/devices')
                .success(function(response, status) {
                    defered.resolve(response, status);
                })
                .error(function(response, status, headers, config) {
                    defered.reject({
                        success: false,
                        message: response ? response.error : '',
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            return promise;
        }

        function getTransactions(uuid) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http.get(baseURL + '/devices')
                .success(function(response, status) {
                    defered.resolve(response, status);
                })
                .error(function(response, status, headers, config) {
                    defered.reject({
                        success: false,
                        message: response ? response.error : '',
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            return promise;
        }
    }
})();
//user1@mail.com
//secret