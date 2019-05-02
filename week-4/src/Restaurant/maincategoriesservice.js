(function()
{
'use strict';
angular.module('MenuApp')
.service('MenuDataService',MenuDataService)
MenuDataService.$inject = ['$http'];
function MenuDataService ($http)
{
var service=this;
//Categories https
service.getAllCategories= function()
{
return $http({
method: "GET",
url: "https://davids-restaurant.herokuapp.com/categories.json"
})
}
service.getItemsForCategory=function(catshrtname)
{
  return $http({
  method: "GET",
  url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+catshrtname
  })



}

}



})();
