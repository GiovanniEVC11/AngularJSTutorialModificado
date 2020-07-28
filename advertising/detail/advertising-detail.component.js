'use strict';

//*** This is the component that display the template associated with details about the product selected

angular.
  module('advertisingDetailModule').
  component('advertisingDetail', {
    templateUrl: 'advertising/detail/advertising-detail.template.html',
    controller: ['$routeParams', 'ProductFactory',
      function advertisingDetailController($routeParams, ProductFactory) {
        var self = this;

        self.productsDetail = ProductFactory.get({productId:$routeParams.productId},
        function(productsDetail){
            self.setImage(productsDetail.imagesDetail[0]);
        });

        self.setImage = function setImage(imageUrl){
            self.mainImageUrl = imageUrl;
        };

/*
        var req = {
            method: 'GET',
            url: 'json-lists/detail/'+$routeParams.productId+'.json',
            dataType: 'json',
            cache: false,
            headers:{
                'Content-Type': 'application/json'
            }
        }

        $http(req).then(
                function successCallback(response){
                     self.productsDetail = response.data; //console.log("response", response);// console.log("response.data", response.data);
                     self.setImage(self.productsDetail.imagesDetail[0]);
                }, function errorCallback(response){
                    console.log("Error al cargar datos JSON", response);
            });
*/

      } // Close controller function
    ] // Close controller
  });
