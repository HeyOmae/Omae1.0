'use strict';

/**
 * @ngdoc function
 * @name heyOmaegithubioApp.controller:MetatypemodalCtrl
 * @description
 * # MetatypemodalCtrl
 * Controller of the heyOmaegithubioApp
 */
angular.module('heyOmaegithubioApp')
  .controller('MetatypemodalCtrl', function ($scope, $modalInstance, metatypes, metatypeSpecial, selected) {
  		$scope.metatypes = metatypes;
  		$scope.selected = selected;
  		$scope.special = metatypeSpecial;
  		console.log($modalInstance);

    $scope.ok = function () {
		$modalInstance.close($scope.selected);
	};

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};
  });
