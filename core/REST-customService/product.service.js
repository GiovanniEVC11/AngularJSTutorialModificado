'use strict';

angular.module('core.productModule').
    factory('ProductFactory', ['$resource',
      function($resource){
        return $resource('json-lists/:productId.json', {}, {
            query: {
                method: 'GET',
                params: {productId: 'advertising-data'},  // This is the default parameter in case the web site didn't had a value 
                isArray: true
            }
        });
      }
  ]);
