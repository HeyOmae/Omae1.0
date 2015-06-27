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
        type: 'troll',
        priority: 'a',
        oldType: null,
        oldPriority: null
      },
      attributes: {
        priority: null,
        oldPriority: null,
        totalPoints: null,
        oldTotalPoints: null,
        spent: {
          bod: 0,
          agi: 0,
          rea: 0,
          str: 0,
          wil: 0,
          log: 0,
          int: 0,
          cha: 0
        },
        oldSpent: {
          bod: 0,
          agi: 0,
          rea: 0,
          str: 0,
          wil: 0,
          log: 0,
          int: 0,
          cha: 0
        }
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
