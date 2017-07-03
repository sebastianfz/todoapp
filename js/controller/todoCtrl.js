(function () {

    'use strict';

    angular.module('TodoApp').controller('TodoController', TodoController);

    TodoController.$inject = ['$log', 'TodoService'];

    function TodoController($log, TodoService) {
        var vm = this;


        var email = 'sebastianfz@gmail.com';

        function setNewTodo() {
            vm.newTodo = {
                email: email
            };
        }

        function getTodos() {
            var queryParams = {
                email: email
            }
            TodoService.getTodos(queryParams)
                .then(function (result) {
                    vm.todoData = result.data;
                }, function (error) {
                    $log.error(error);
                })
        }

        function init() {
            getTodos();
            setNewTodo();
        }

        vm.saveTodo = function () {
            TodoService.saveTodo(vm.newTodo)
                .then(function (result) {
                    setNewTodo();
                    vm.todoData.push(result.data);
                }, function (error) {
                    $log.error(error);
                })
        };

        vm.completeTodo = function (index, item) {
            item.email = email;
            TodoService.completeTodo(item)
                .then(function (result) {
                    vm.todoData[index] = result.data;
                }, function (error) {
                    $log.error(error);
                })
        };

        init();
    }
})();