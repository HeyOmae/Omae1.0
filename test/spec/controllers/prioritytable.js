'use strict';

describe('Controller: PrioritytableCtrl', function () {

  // load the controller's module
  beforeEach(module('heyOmaegithubioApp'));

  var PrioritytableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrioritytableCtrl = $controller('PrioritytableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
