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
