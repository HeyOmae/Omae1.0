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

  	//load priority data
    $http.get('../assets/priority.json').success(function (data) {
    	$scope.priorityData = data;
    }).error(function (data, status){
		console.log('Error loading Priority Data : ' + status);
	});

    //load metatype data
    $http.get('../assets/metatype.json').success(function (data) {

    	$scope.metatypes = data;

    }).error(function (data, status){
		$log.debug('Error loading the Metatypes : ' + status);
	});

    //load skills data
    $http.get('../assets/skills.json').success(function (data) {

    	$scope.activeSkills = data;

    }).error(function (data, status){
		$log.debug('Error Loading the skills : ' + status);
	});


  });
