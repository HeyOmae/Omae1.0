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
			scope.$apply(function () {
	      		var priorityLevel = element.parent().attr('class');
	      		scope.set.priority = priorityLevel;
	      		scope.set.special = scope.priorityMetatypeData[scope.set.type].special;
	      		console.log(scope.set.priority);
			});

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

			scope.ok = function () {
				console.log('should close');
			    scope.modalInstance.close(scope.selected.item);
			};

			scope.cancel = function () {
			    scope.modalInstance.dismiss('cancel');
			};
		}

      	element.click(openModal);

      }
    };
  });
