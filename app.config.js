'use strict'; // A module's .config() method gives us access to the available providers for configuration. To make the providers, services and directives defined in ngRoute available to our application, we need to add ngRoute as a dependency of our phonecatApp module.

angular.module('PrimerModulo').   // Module associated to set up
  config(['$routeProvider',   // Using the .config() method, we request the necessary providers ($routeProvider) to be injected into our configuration function and then use their methods to specify the behavior of the corresponding services.
    function config($routeProvider) {  // Declaring the function to set up the template according to website URL
      $routeProvider.
        when('/json-lists', {
          template: '<advertising-list> <advertising-list>'  // Show the main advertasing template
        }).
        when('/json-lists/:productId', {                    // : mans that receives a variable 
          template: '<advertising-detail> <advertising-detail>'  // show details about the product selected
        }).
        otherwise('/json-lists');
    }
  ]);
