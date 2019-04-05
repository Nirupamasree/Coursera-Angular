(function () {
'use strict';
angular.module('myFirstApp',[])
.controller('MyFirstController',function($scope){
$scope.name="Nirupama";
$scope.func=function ()
{
  return "Hello Coursera";
}
});

})();
