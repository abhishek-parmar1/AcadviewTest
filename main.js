var ngTodo = angular.module('ngTodo', []);

ngTodo.controller('mainController',function($scope){
    
    $scope.todoArray = ['Dress-up','Attend Class','Download Lecture','Complete Extra Project Objectives','Work on Self Project'];
});