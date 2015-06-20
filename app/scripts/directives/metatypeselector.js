'use strict';

/**
 * @ngdoc directive
 * @name heyOmaegithubioApp.directive:metatypeSelector
 * @description
 * # metatypeSelector
 */
angular.module('heyOmaegithubioApp')
  .directive('metatypeSelector', function ($modal, $log) {
    return {
      restrict: 'A',
      link: function postLink (scope, element, attrs) {

        function openModal() {

      		console.log(attrs);

      		//set selected
      		scope.selected.metatype.priority = element.parent().attr('class');
      		scope.selected.metatype.special = scope.priorityData[scope.selected.metatype.priority].metatype[scope.selected.metatype.type].special;

			scope.modalInstance = $modal.open({
				animation: true,
				templateUrl: 'scripts/directives/metatypeselector.html',
				controller: 'PrioritytableCtrl',
				resolve: {
					items: function () {
						return scope.metatypes;
					}
				}
			});

			scope.modalInstance.result.then(function (selectedItem) {
				scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});

			// scope.ok = function () {
			// 	console.log('should close');
			//     modalInstance.close(scope.selected.item);
			// };

			// scope.cancel = function () {
			//     modalInstance.dismiss('cancel');
			// };
		}

      	element.on('mousedown', openModal);

      }
    };
  });
