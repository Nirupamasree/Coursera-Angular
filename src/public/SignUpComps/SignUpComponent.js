(function () {
"use strict";

angular.module('public')
.component('signUp', {
  templateUrl: 'src/public/SignUpComps/SignUpComponent.html',
  bindings: {
    data: '=',
    onSubmit:'&'
  }
});



})();
