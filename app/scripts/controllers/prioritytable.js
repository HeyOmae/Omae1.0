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
    $http.get('../assets/priority.json').success(function (data, status, headers, config) {
    	$scope.priorityData = data;
    	console.log($scope.priorityData);
    }).error(function (data, status){
		alert("Error status : " + status);
	});
  });
