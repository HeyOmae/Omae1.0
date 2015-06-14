'use strict';

describe('Controller: PrioritytableCtrl', function () {

  // load the controller's module
  beforeEach(module('heyOmaegithubioApp'));

  var PrioritytableCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');

    scope = $rootScope.$new();
    PrioritytableCtrl = $controller('PrioritytableCtrl', {
      $scope: scope
    });
  }));

  it('priorityData should have data', function () {
    expect(scope.priorityData.length).toBe(5);
  });
});
