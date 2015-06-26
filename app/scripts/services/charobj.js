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
    var selected = {
      metatype: {
        type: null,
        priority: null,
        oldType: null,
        oldPriority: null
      },
      attibutes: {
        totalPoints: null,
        spent: null
      }
    };

    // Public API here
    return {
      selected: selected,

      get: {
        metatype: function() {
          return selected.metatype.type;
        }
      }
    };
  });
