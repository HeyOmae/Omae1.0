'use strict';

/**
 * @ngdoc service
 * @name heyOmaegithubioApp.CharObj
 * @description
 * # CharObj
 * Factory in the heyOmaegithubioApp.
 */
angular.module('heyOmaegithubioApp')
  .factory('CharObj', function () {
    // Service logic
    var metatype = 'human';


    // Public API here
    return {
      //getter
      get: {
        metatype: function() {
          return metatype;
        }
      },

      //setter
      set: {
        metatype: function(type) {
          metatype = type;
        }
      }
    };
  });
