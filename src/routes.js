(function(){
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider)
 {
  // Redirect to home page if no other URL matches
   $urlRouterProvider.otherwise('/');
   // *** Set up UI states ***
 $stateProvider
 // Home page
 .state('home', {
   url: '/',
   templateUrl: 'src/Restaurant/templates/home.html'
 })
 .state('categories', {
    url: '/allcategories',
    templateUrl: 'src/Restaurant/templates/maincategoriesTemplate.html',
    controller: 'CategoriesController as cat',
    resolve: {
         resp: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories().then(function (response) {
            return response.data;})
         }]
       }
     })
.state('items',{
      url:'/items/{itemshortname}',
      templateUrl: 'src/Restaurant/templates/itemdetail.html',
      controller: 'itemdetailscontroller as itm',
      resolve:{
       item:['$stateParams','MenuDataService',function($stateParams,MenuDataService)
     {
         return MenuDataService.getItemsForCategory($stateParams.itemshortname).then (function (response)
       {
          return response.data;

       })

     }]


      }

    })
}

})();
