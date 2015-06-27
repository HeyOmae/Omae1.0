'use strict';

/**
 * @ngdoc function
 * @name heyOmaegithubioApp.controller:AttibutesmodalCtrl
 * @description
 * # AttibutesmodalCtrl
 * Controller of the heyOmaegithubioApp
 */
angular.module('heyOmaegithubioApp')
  .controller('AttributesmodalCtrl', function ($scope, $modalInstance, stats, selected) {
  	$scope.stats = stats;
  	$scope.selected = selected;

  	var maxAttribute = false;

  	function spentPoints() {
  		var total = 0;

  		for (var attribute in selected.spent) {
  			total+=selected.spent[attribute];
  		}

  		return total;
  	}

  	$scope.spentPoints = spentPoints;

  	$scope.raise = function(attribute) {
  		var currentAttibute = selected.spent[attribute]+stats.min[attribute],
  			lowerMax = stats.max[attribute]-1;

  		function checkAndRaise(max) {
  			if (currentAttibute < max &&
	  			spentPoints() < selected.totalPoints
	  		) {
	  			selected.spent[attribute]++;
	  		}
  		}

  		if (maxAttribute) {

  			checkAndRaise(lowerMax);

  		} else {

  			checkAndRaise(stats.max[attribute]);

  			if (currentAttibute === lowerMax) {
  				maxAttribute = true;
  			}
  		}
  	};

  	$scope.lower = function(attribute) {

  		if(selected.spent[attribute] > 0) {
	  		if(selected.spent[attribute]+stats.min[attribute] === stats.max[attribute]) {
	  			maxAttribute = false;
	  		}
  			selected.spent[attribute]--;
  		}
  	};

    $scope.ok = function () {
		$modalInstance.close(selected);
    };

  	$scope.cancel = function () {
  	    $modalInstance.dismiss('cancel');
  	};
  });
