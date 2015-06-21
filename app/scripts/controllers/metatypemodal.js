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
		console.log(metatypeSpecial);

    $scope.ok = function () {
		$modalInstance.close(selected);
	};

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};
  });
