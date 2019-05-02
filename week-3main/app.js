(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearch)
.directive('foundItems', foundItemsDirective);
function foundItemsDirective() {
  var ddo = {
    templateUrl: 'founditems.html',
    scope: {
      found: '<',
      removeItem: '&onRemove'
    },
    controller: FoundListDirectiveController,
   controllerAs: 'foundlist',
   bindToController: true
  };
  return ddo;
}
function FoundListDirectiveController() {
  var foundlist = this;
  foundlist.emptyitems = function () {
      if (foundlist.found.length==0) {
        return true;
      }
        return false;
    }
}
NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService)
{
  var menu=this;
//  menu.Found=[];
menu.getMatched=function(Searchterm)
{
    var foundItems=[];
  MenuSearchService.getMatchedMenuItems(Searchterm).then(function(data) {
foundItems = data.data.menu_items.filter(function(item)
    {return item.description.includes(Searchterm)});
    if(foundItems.Length != 0 && Searchterm != undefined)
    {
menu.found=foundItems;
}
else
{
  menu.found=[];
}
    });
}
menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };
}
MenuSearch.$inject = ['$http'];
function MenuSearch($http)
{
var service=this;
service.getMatchedMenuItems=function(Searchterm)
{
debugger;
return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    })
   };
}
})();
