'use strict';

/**
 * @ngdoc function
 * @name heyOmaegithubioApp.controller:PrioritytableCtrl
 * @description
 * # PrioritytableCtrl
 * Controller of the heyOmaegithubioApp
 */
angular.module('heyOmaegithubioApp')
  .controller('PrioritytableCtrl', function ($scope, $http, $modal, $log, CharObj) {

  	$scope.selected = CharObj.selected;

	var selectedPriority = function(e) {
		return e.currentTarget.parentElement.className;
	};

	$scope.modal = {
		metatype: function($event) {

    		$scope.selected.metatype.priority = selectedPriority($event);

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
				$log.info('Modal dismissed at: ' + new Date());
			});

    	},
    	attibutes: function($event) {
    		$scope.selected.attibutes.priority = selectedPriority($event);
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
