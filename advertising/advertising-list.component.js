'use strict';

angular.module('advertisingListModule') // Declaring the Module
.component('advertisingList', {          // Declaring the Module's Component
      templateUrl: 'advertising/advertising-list.template.html', // Template to use
      controller: ['ProductFactory', function productListController(ProductFactory) { // Inject a service to use (http)

          var self = this;
          self.products = ProductFactory.query();  // Obtain data from the service (productFactory) executing the query (called in this case: query)
          self.priority = 'saleNumber';

/*
          // This is lower-level $http service
          $http({ // New mode to use HTTP
              method: 'GET',
              url: 'json-lists/advertising-data.json',
              dataType: 'json',
              cache: false
          }).then(
                  function successCallback(response){
                       self.products = response.data;   // console.log("response: ", response); // console.log("response.data: ", response.data);
                  }, function errorCallback(response){
                      console.log("Error al cargar datos JSON", response);
              });
*/
      }]
});
