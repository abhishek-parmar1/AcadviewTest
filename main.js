var ngTodo = angular.module('ngTodo', []);

ngTodo.controller('mainController',function($scope){
    $scope.hello=function(){
        console.log("controller created ");
    }
});