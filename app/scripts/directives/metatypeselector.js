'use strict';

/**
 * @ngdoc directive
 * @name heyOmaegithubioApp.directive:metatypeSelector
 * @description
 * # metatypeSelector
 */
angular.module('heyOmaegithubioApp')
  .directive('metatypeSelector', function () {
    return {
      restrict: 'A',
      scope: {
      	priorityMetatypeData: '=',
      	set: '='
      },
      link: function postLink (scope, element, attrs) {

      	scope.set.openModal = function() {
      		console.log('put open modal code here');
      	};

        function openModal() {

      		console.log(attrs);

      		//set selected
			// scope.$apply(function () {
	  //     		var priorityLevel = element.parent().attr('class');
	  //     		scope.set.priority = priorityLevel;
	  //     		scope.set.special = scope.priorityMetatypeData[scope.set.type].special;
	  //     		console.log(scope.set.priority);
			// });

			

			

			// scope.ok = function () {
			// 	console.log('should close');
			//     scope.modalInstance.close(scope.selected.item);
			// };

			// scope.cancel = function () {
			//     scope.modalInstance.dismiss('cancel');
			// };
		}

      	element.click(openModal);

      }
    };
  });
