var robotApp = angular.module('robotApp', []);

robotApp.controller('robotControlController', function($scope, $http){

    $scope.goUp = function(){
        var config = {
            params : {
                "dir": "forward",
                "amount": $scope.movementAmount
            }
        }
        $http.get('https://ancient-reef-69718.herokuapp.com/:forward/:' + $scope.movementAmount);
    }

    $scope.goDown = function(){
        var config = {
            params : {
                "dir": "back",
                "amount": $scope.movementAmount
            }
        }
        $http.get('https://ancient-reef-69718.herokuapp.com/:back/:' + $scope.movementAmount);
    }

    $scope.turnLeft = function(){
        var config = {
            params : {
                "dir": "left",
                "amount": $scope.rotationAmount
            }
        }
        $http.get('https://ancient-reef-69718.herokuapp.com/:left/:' + $scope.rotationAmount);
    }

    $scope.turnRight = function(){
        var config = {
            params : {
                "dir": "right",
                "amount": $scope.rotationAmount
            }
        }
        $http.get('https://ancient-reef-69718.herokuapp.com/:right/:' + $scope.rotationAmount);
    }

});
