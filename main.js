var ngTodo = angular.module('ngTodo', []);

ngTodo.controller('mainController',function($scope){
    
    $scope.todoArray = [
        {
            title : 'Get-up',
            details : 'I must get-up early today.'
        },
        {
            title : 'Attend Class',
            details : 'I must Attend Class today.'
        },
        {
            title : 'Download Lecture',
            details : 'I must Download Lecture today.'
        },
        {
            title : 'Complete Extra Project Objectives',
            details : 'I must Complete Extra Project Objectives today.'
        },
        {
            title : 'Work on Self Project',
            details : 'I must Work on Self Project today.'
        }
                        ];
    
    $scope.addTodo = function(todaName,todoDetails){
        $scope.todoArray[$scope.todoArray.length]={
            title : todaName,
            details : todoDetails
        };
    }
});