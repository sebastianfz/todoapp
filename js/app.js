(function () {
    'use strict';

    angular.module('TodoApp', ['ngAnimate']);

    angular.module('TodoApp')
        .constant('APIPATH', 'http://quip-todos.herokuapp.com/');
})();