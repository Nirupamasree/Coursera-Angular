(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', function ($scope) {
  $scope.message=" ";
$scope.check = function () {
  var t=$scope.eatendishes;
  if(t==undefined || t=="")
  {
  $scope.message="Please enter data first";
    $scope.msgcolor="red";
    $scope.brdrcolor="red";
  return false;
  }
  var y=t.split(",");
  if(y.length > 3)
  {
    $scope.message= "Too much!";

  }
  if (y.length <=3)
  {
   $scope.message= "Enjoy!";
  }
   $scope.msgcolor="green";
     $scope.brdrcolor="green";
}
});
})();
