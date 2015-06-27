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

  	function findCurrentAttibute(attribute) {
  		return selected.spent[attribute]+stats.min[attribute];
  	}

  	$scope.spentPoints = spentPoints;

  	$scope.raise = function(attribute) {
  		var currentAttibute = findCurrentAttibute(attribute),
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
	  		if(findCurrentAttibute(attribute) === stats.max[attribute]) {
	  			maxAttribute = false;
	  		}
  			selected.spent[attribute]--;
  		}
  	};

  	$scope.isOver = function(attribute) {
  		if (findCurrentAttibute(attribute) > stats.max[attribute]) {
  			return true;
  		} else {
  			return false;
  		}
  	};

  	$scope.multiMax = function(attribute) {
  		var currentAttibute = findCurrentAttibute(attribute);
  		if(currentAttibute === stats.max[attribute]) {
  			for (var att in selected.spent) {
  				if (attribute !== att && findCurrentAttibute(att) === stats.max[att]) {
  					return true;
  				}
  			}
  		}
  		return false;
  		
  	};

    $scope.ok = function () {
    	function attributeIsNotOver() {
    		for (var attribute in selected.spent) {
    			if ($scope.isOver(attribute)) {
    				return false;
    			}
    		}
    		return true;
    	}

	  	function isThereOnlyOneMax() {
	  		var maxAttributes = [];
	  		for (var attribute in selected.spent) {
	  			if (findCurrentAttibute(attribute) >= stats.max[attribute]) {
	  				maxAttributes.push(attribute);
	  			}
	  		}

	  		if (maxAttributes.length > 1){
	  			return false;
	  		} else {
	  			return true;
	  		}
	  	}

    	var Over = attributeIsNotOver(),
    		lessThanOneMax = isThereOnlyOneMax();

    	if (lessThanOneMax && Over) {
    		$modalInstance.close(selected);
    	} else {
    		return null;
    	}
    };

  	$scope.cancel = function () {
  	    $modalInstance.dismiss('cancel');
  	};
  });
