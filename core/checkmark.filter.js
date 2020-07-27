'use strict';

angular.module('core').
    filter('checkmark', function(){ // Filter name, Filter function
        return function(input){     
            return input ? '\u2713' : '\u2718';
        };
    });
