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
			type: null,
			priority: null,
			oldType: null,
			oldPriority: null
		}
	};

	$scope.modal = {
		metatype: function($event) {

    		var selectedPriority = $event.currentTarget.parentElement.className;

    		$scope.selected.metatype.priority = selectedPriority;

	    	var modalInstance = $modal.open({
				animation: false,
				templateUrl: 'views/modal/metatypeselector.html',
				controller: 'MetatypemodalCtrl',
				resolve: {
					metatypes: function() {
						return $scope.metatypes;
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
				$scope.selected.metatype.oldType = $scope.selected.metatype.type;
				$scope.selected.metatype.oldPriority = $scope.selected.metatype.priority;
				$scope.selected.metatype = selectedItem;
			}, function () {
				$scope.selected.metatype.type = $scope.selected.metatype.oldType;
				$scope.selected.metatype.priority = $scope.selected.metatype.oldPriority;
				$log.info('Modal dismissed at: ' + new Date());
			});

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

    }).error(function (data, status){
		$log.debug('Error status : ' + status);
	});


  });
