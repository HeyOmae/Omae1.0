'use strict';

/**
 * @ngdoc directive
 * @name heyOmaegithubioApp.directive:activeNav
 * @description
 * # activeNav
 */
angular.module('heyOmaegithubioApp')
  .directive('activeNav', function ($location) {
    return {
      templateUrl: 'views/activenav.html',
      restrict: 'E',
      link: function postLink(scope) {
      	scope.isActive = function (viewLocation) {
    			var active = (viewLocation === $location.path());
    			return active;
		    };
      }
    };
  });
