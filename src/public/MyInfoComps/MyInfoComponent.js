(function () {
"use strict";

angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/MyInfoComps/MyInfoTemplate.html',
  bindings: {
    data: '<'
  },
  controller: MyInfCtrl
});
MyInfCtrl.$inject = ['ApiPath'];
function MyInfCtrl(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}


})();
