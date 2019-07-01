(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://niru-reserver.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
