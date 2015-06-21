'use strict';

describe('Controller: MetatypemodalCtrl', function () {

  // load the controller's module
  beforeEach(module('heyOmaegithubioApp'));

  var MetatypemodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MetatypemodalCtrl = $controller('MetatypemodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
