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
    // ...

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
