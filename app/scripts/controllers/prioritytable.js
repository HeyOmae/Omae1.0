'use strict';

/**
 * @ngdoc function
 * @name heyOmaegithubioApp.controller:PrioritytableCtrl
 * @description
 * # PrioritytableCtrl
 * Controller of the heyOmaegithubioApp
 */
angular.module('heyOmaegithubioApp')
  .controller('PrioritytableCtrl', function ($scope, $http) {

  	$scope.selected = {
		metatype: {
			type: 'human',
			priority: null,
			special: null
		}
	};

  	//load priority data
    $http.get('../assets/priority.json').success(function (data) {
    	$scope.priorityData = data;
    }).error(function (data, status){
		console.log('Error status : ' + status);
	});

    //load metatype data
    $http.get('../assets/metatype.json').success(function (data) {
    	$scope.metatypes = data;

		$scope.ok = function () {
			console.log($scope);
		//    $scope.modalInstance.close($scope.selected.metatype);
		};

		// $scope.cancel = function () {
		//     $scope.modalInstance.dismiss('cancel');
		// };

    }).error(function (data, status){
		console.log('Error status : ' + status);
	});

	$scope.setValue = {
		metatype: {
			type: function(type) {
				$scope.selected.metatype.type = type;
			},
			priority: function(priority) {
				console.log('set priority to '+priority);
				$scope.selected.metatype.priority = priority;
				console.log($scope);
			},
			special: function (points) {
				$scope.selected.metatype.special = points;
			}
		}
	};


    //placeholder data for modal

  });
