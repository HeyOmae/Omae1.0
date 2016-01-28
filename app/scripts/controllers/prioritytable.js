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

// 	$scope.solution = function (S, T) {
    
//     if(S === T) {
//         return 'NOTHING';
//     } else {
//         for(var i=0, len=S.length; i<len; ++i) {
//             if (S.charAt(i) !== T.charAt(i)) {

//                 if(S.slice(0,i)+S.slice(i+1) === T) {
//                    return 'DELETE '+S.charAt(i);
//                 } else if (S.slice(0, i)+ T.charAt(i) + S.slice(i) === T) {
//                    return 'INSERT '+T.charAt(i);
//                 } else if ( S.charAt( T.search(S.charAt(i)) ) === T.charAt(i) && S.charAt(i) === T.charAt(S.search(T.charAt(i)))) {
//                 	return 'SWAP '+S.charAt(i) +' '+ S.charAt( T.search(S.charAt(i)) );
//                 }
//             }
//         }
//     }

//     return 'IMPOSSIBLE';
// };


  });
