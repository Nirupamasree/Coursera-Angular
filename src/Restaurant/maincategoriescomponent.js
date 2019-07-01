(function () {
'use strict';
angular.module('MenuApp')
.component('restaurantCats', {
  templateUrl: 'src/Restaurant/templates/categoriestemplate.html',
  bindings: {
    categ: '<'
  }
});

})();
