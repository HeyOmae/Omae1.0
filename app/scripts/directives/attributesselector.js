'use strict';

/**
 * @ngdoc directive
 * @name heyOmaegithubioApp.directive:attibutesSelector
 * @description
 * # attibutesSelector
 */
angular.module('heyOmaegithubioApp')
  .directive('attibutesSelector', function ($modal, $log, CharObj) {
    return {
      restrict: 'A',
      scope: {
      	stats: '=',
      	attributePoints: '='
      },
      link: function postLink($scope, element) {
  		$scope.selected = CharObj.selected;

      	var openModal = function() {
      		$scope.selected.attributes.priority = element.context.parentElement.className;
      		$scope.selected.attributes.totalPoints = $scope.attributePoints;

      		var modalInstance = $modal.open({
				animation: false,
				templateUrl: 'views/modal/attributesselector.html',
				controller: 'AttributesmodalCtrl',
				resolve: {
					stats: function () {
						return $scope.stats;
					},
					selected: function () {
						return $scope.selected.attributes;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected.attributes.oldTotalPoints = $scope.selected.attributes.totalPoints;

				$scope.selected.attributes.oldSpent = $scope.selected.attributes.spent;

				$scope.selected.attributes.oldPriority = $scope.selected.attributes.priority;

				$scope.selected.attributes = selectedItem;
			}, function () {
				$scope.selected.attributes.totalPoints = $scope.selected.attributes.oldTotalPoints;

				$scope.selected.attributes.spent = $scope.selected.attributes.oldSpent;

				$scope.selected.attributes.priority = $scope.selected.attributes.oldPriority;

				$log.info('Metatype Modal dismissed at: ' + new Date());
			});
      	};

      	element.click(openModal);
      }
    };
  });
