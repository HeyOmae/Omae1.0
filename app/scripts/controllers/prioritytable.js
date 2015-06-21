'use strict';

/**
 * @ngdoc function
 * @name heyOmaegithubioApp.controller:PrioritytableCtrl
 * @description
 * # PrioritytableCtrl
 * Controller of the heyOmaegithubioApp
 */
angular.module('heyOmaegithubioApp')
  .controller('PrioritytableCtrl', function ($scope, $http, $modal, $log) {

  	$scope.selected = {
		metatype: {
			type: 'troll',
			priority: null
		}
	};

	$scope.modal = {
		// metatype: function () {
		// 	console.log('open');
		// }
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

    	$scope.modal.metatype = function($event) {

    		var selectedPriority = $event.currentTarget.parentElement.className;

    		$scope.selected.metatype.priority = selectedPriority;

	    	var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'views/modal/metatypeselector.html',
				controller: 'MetatypemodalCtrl',
				resolve: {
					metatypes: function() {
						return data;
					},
					metatypeSpecial: function() {
						return $scope.priorityData[selectedPriority].metatype;
					},
					selected: function () {
						return $scope.selected.metatype;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected.metatype = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});

			$scope.toggleAnimation = function () {
				$scope.animationsEnabled = !$scope.animationsEnabled;
			};

    	};

    }).error(function (data, status){
		console.log('Error status : ' + status);
	});


  });
