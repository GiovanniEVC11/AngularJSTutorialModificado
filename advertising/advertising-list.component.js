'use strict';

angular.module('advertisingListModule')
.component('advertisingList', {
      templateUrl: 'advertising/advertising-list.template.html',
      controller: ['$http', function PhoneListController($http) {
          var self = this;
          self.priority = 'saleNumber';
/*
          var type = XMLHttpRequest.responseType; // buscando
          XMLHttpRequest.responseType = type;  //  ...

          $http.get('json-lists/advertising-data.json').then(function success(response){
                self.phones = angular.fromJson(response.data); // o bien dicho self.phones = response.data
            });
*/

              $http({
                method: 'GET',
                url: 'json-lists/advertising-data.json',
                dataType: 'json',
                cache: false
              }).then(
                  function successCallback(response){
                       self.phones = response.data;
                  }, function errorCallback(response){
                      console.log("Error al cargar datos JSON", response);
                  });

          }
     ]
});
