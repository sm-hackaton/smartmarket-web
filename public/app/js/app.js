(function () {
    'use strict';
    angular
        .module('smartmarket-web', [
            'ui.router',
            'ngRoute',
            'ngLodash'
        ])
        .run(['$rootScope', '$state', '$stateParams', '$window',
            function ($rootScope, $state, $stateParams, $window) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$storage = $window.localStorage;
            }]);
})();

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

(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state'];
    /**
     * TodoController
     * @param $scope
     * @constructor
     */
    function LoginController($scope, $state) {

        $scope.login = function(){
            $state.go("home")
        }

    }
})();

(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope'];
    /**
     * TodoController
     * @param $scope
     * @constructor
     */
    function TodoController($scope) {
        $scope.todos = [
            {
                text: 'Seguir a @DavidIruzubieta en twitter',
                done: false
            },
            {
                text: 'Ver el código del ejemplo',
                done: false
            }
        ];

        $scope.getTotalTodos = getTotalTodos;
        $scope.addTodo = addTodo;
        $scope.toggleState = toggleState;
        $scope.clearCompleted = clearCompleted;

        /**
         * Número de tareas total
         * @returns {Number}
         */
        function getTotalTodos() {
            return $scope.todos.length;
        }

        /**
         * Añadir nueva tarea
         */
        function addTodo() {
            $scope.todos.push({text: $scope.formTodoText, done: false});
            $scope.formTodoText = '';
        }

        /**
         * Cambiar estado de la tarea
         * @param todo
         */
        function toggleState(todo) {
            todo.done = !todo.done;
        }

        /**
         * Limpiar tareas completas
         */
        function clearCompleted() {
            $scope.todos = _.filter($scope.todos, function (todo) {
                return !todo.done;
            });
        }
    }
})();

(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .constant('BASEPATH', {
            apiURL: '[your API URL]',
            webURL: '[your WEB URL]'
        });
})();

(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .config(URLConfig)
        .config(InitialConfiguration);

    URLConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    /**
     * Configuración de URLs
     * @param $stateProvider
     * @param $locationProvider
     * @param $urlRouterProvider
     * @param helper
     * @constructor
     */
    function URLConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: helper.basepath('components', 'login'),
                controller: 'LoginController'
            }).state('home', {
                url: '/home',
                templateUrl: helper.basepath('components', 'home'),
                controller: 'HomeController'
            });
    }

    InitialConfiguration.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    /**
     * Configuración inicial
     * @param $controllerProvider
     * @param $compileProvider
     * @param $filterProvider
     * @param $provide
     * @constructor
     */
    function InitialConfiguration($controllerProvider, $compileProvider, $filterProvider, $provide) {
        angular.module('smartmarket-web').controller = $controllerProvider.register;
        angular.module('smartmarket-web').directive = $compileProvider.directive;
        angular.module('smartmarket-web').filter = $filterProvider.register;
        angular.module('smartmarket-web').factory = $provide.factory;
        angular.module('smartmarket-web').service = $provide.service;
        angular.module('smartmarket-web').constant = $provide.constant;
        angular.module('smartmarket-web').value = $provide.value;
    }
})();

(function () {
    'use strict';
    angular
        .module('smartmarket-web')
        .provider('RouteHelpers', RouteHelpers);

    function RouteHelpers() {
        this.basepath = basepath;

        function basepath(type, folder, template) {
            template = template || 'template';
            if (folder) {
                return '/app/views/' + type + '/' + folder + '/' + template + '.html';
            }
            return '/app/views/' + type + '/' + template + '.html';
        }

        this.$get = function () {
            return {
                basepath: this.basepath
            };
        };
    }
})();
