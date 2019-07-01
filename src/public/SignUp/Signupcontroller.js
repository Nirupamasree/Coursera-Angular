(function () {
"use strict";
angular.module('public')
.controller('SignUpcontroller', SignUpcontroller);

SignUpcontroller.$inject = ['SignUpService'];
function SignUpcontroller(SignUpService) {
 var $ctrl = this;
 var frm={};
 $ctrl.status="";
 $ctrl.FrmControls=frm;
 $ctrl.submit =function()
 {
 SignUpService.getShortname($ctrl.FrmControls).then(function success(response) {
   debugger;
   $ctrl.status="Your information has been saved.";
}, function error(response) {
  $ctrl.status="No such menu number exists";
});
 }
}


})();
