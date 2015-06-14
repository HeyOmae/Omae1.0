'use strict';

/**
 * @ngdoc overview
 * @name heyOmaegithubioApp
 * @description
 * # heyOmaegithubioApp
 *
 * Main module of the application.
 */
angular
  .module('heyOmaegithubioApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/priorityTable', {
        templateUrl: 'views/prioritytable.html',
        controller: 'PrioritytableCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
