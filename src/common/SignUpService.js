(function ()
  {
'use strict';
angular.module('common')
.service('SignUpService', SignUpService);
SignUpService.$inject=['$http','ApiPath'];
function SignUpService($http,ApiPath) {
  var service = this;
  var details={};
  service.getShortname=function(Shortname){
debugger;
 return $http.get(ApiPath + "/menu_items/" + Shortname.menum +".json")
   .success(function (result) {
    details=Shortname;
     details.data=result;
     //console.log(details.data);
     return "success";
   }).error(function (result) {
     debugger;
  details={};
     return "fail";
   })
  }
 service.display=function( )
     {
       return details;
     }
   }
})();
