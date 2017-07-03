(function () {
    'use strict';

    angular.module('TodoApp', ['ngAnimate']);

    angular.module('TodoApp')
        .constant('APIPATH', 'https://quip-todos.herokuapp.com/');
})();