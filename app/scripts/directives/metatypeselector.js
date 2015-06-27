'use strict';

/**
 * @ngdoc directive
 * @name heyOmaegithubioApp.directive:metatypeSelector
 * @description
 * # metatypeSelector
 */
angular.module('heyOmaegithubioApp')
  .directive('metatypeSelector', function ($modal, $log, CharObj) {
    return {
      restrict: 'A',
      scope: {
      	priorityData: '=',
      	metatypes: '='
      },
      link: function postLink ($scope, element) {

  		$scope.selected = CharObj.selected;

      	var openModal = function() {

    		$scope.selected.metatype.priority = element.context.parentElement.className;

	    	var modalInstance = $modal.open({
				animation: false,
				templateUrl: 'views/modal/metatypeselector.html',
				controller: 'MetatypemodalCtrl',
				resolve: {
					metatypes: function() {
						return $scope.metatypes;
					},
					metatypeSpecial: function() {
						return $scope.priorityData[$scope.selected.metatype.priority].metatype;
					},
					selected: function () {
						return $scope.selected.metatype;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected.metatype.oldType = $scope.selected.metatype.type;
				$scope.selected.metatype.oldPriority = $scope.selected.metatype.priority;
				$scope.selected.metatype = selectedItem;
			}, function () {
				$scope.selected.metatype.type = $scope.selected.metatype.oldType;
				$scope.selected.metatype.priority = $scope.selected.metatype.oldPriority;
				$log.info('Metatype Modal dismissed at: ' + new Date());
			});

    	};

    	

      	element.click(openModal);

      }
    };
  });
