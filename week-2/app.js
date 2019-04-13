(function() {
  'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('BoughtController',BoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOff);
ToBuyController.$inject = ['ShoppingListCheckOffService'];
BoughtController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  var t =[];
  t=ShoppingListCheckOffService.showitems();
  tobuy.items=t[0];
  tobuy.msg=""
tobuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}
function BoughtController(ShoppingListCheckOffService)
{
var bought =this;
var tl =[];
tl=ShoppingListCheckOffService.showitems();
bought.items=tl[1];
}
function ShoppingListCheckOff()
 {
var service = this;
var tobuyitems = [{ name: "cookies", quantity: 10 },{ name: "coke", quantity: 15 },{ name: "chips", quantity: 10 },{ name: "patties", quantity: 10 },{ name: "chocolates", quantity: 100 }];
var boughtitems=[];
  service.removeItem=function(itemIndex){
    boughtitems.push(tobuyitems[itemIndex])
tobuyitems.splice(itemIndex,1)};
  service.showitems=function()
  {
      var returnedarrays=[tobuyitems,boughtitems];
      return returnedarrays;
  }

}
})();
