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
      link: function postLink(scope, element) {
      	scope.isActive = function (viewLocation) {
			var active = (viewLocation === $location.path());
			console.log(active);
			return active;
		};
      }
    };
  });
