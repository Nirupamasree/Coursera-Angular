(function(){
'use strict';
angular.module('MenuApp')
.controller('CategoriesController',CategoriesController)
CategoriesController.$inject=['MenuDataService','resp'];
function CategoriesController(MenuDataService,resp)
  {
var category= this;
category.categories =resp;
}
})();
