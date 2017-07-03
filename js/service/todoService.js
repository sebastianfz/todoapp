(function () {
    'use strict';

    angular.module('TodoApp').service('TodoService', TodoService);

    TodoService.$inject = ['$http', '$httpParamSerializer', 'APIPATH'];

    function TodoService($http, $httpParamSerializer, APIPATH) {
        this.getTodos = getTodos;
        this.saveTodo = saveTodo;
        this.completeTodo = completeTodo;
        this.resetTodo = resetTodo;

        function getTodos(queryData) {
            return $http.get(APIPATH + 'get_todos?' + $httpParamSerializer(queryData));
        }

        function saveTodo(todoData) {
            return $http({
                method: 'POST',
                url: APIPATH + 'add_todo',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: todoData
            });
        }

        function completeTodo(todoData) {
            return $http({
                method: 'POST',
                url: APIPATH + 'mark_completed',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: todoData
            });
        }

        function resetTodo(todoData) {
            return $http.post(APIPATH + 'reset', todoData);
        }
    }
})();