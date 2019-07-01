(function () {
"use strict";
angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService','resp'];
function MyInfoController(SignUpService,resp) {
 var $ctrl = this;
$ctrl.data=resp;
}


})();
