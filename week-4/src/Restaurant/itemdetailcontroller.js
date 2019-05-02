(function(){
'use strict';
angular.module('MenuApp')
.controller('itemdetailscontroller',itemdetailscontroller)
itemdetailscontroller.$inject=['MenuDataService','item'];
function itemdetailscontroller(MenuDataService,item)
  {
    debugger;
var str= this;
str.items=item.menu_items;
}
})();
