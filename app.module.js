'use strict'; // Define the `PrimerModulo` module

angular.module('PrimerModulo', [  // ...which depends on the
  'ngRoute',  // The routing functionality is provided by AngularJS in the ngRoute module, which is distributed separately from the core AngularJS framework.
  // $route is used for deep-linking URLs to controllers and views (HTML partials). It watches $location.url() and tries to map the path to an existing route definition.
  'core',
  'advertisingDetailModule',  // Module to detail products/services
  'advertisingListModule',    // Module to show products/services
]);
