'use strict';

describe('Controller: AttibutesmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('heyOmaegithubioApp'));

  var AttibutesmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AttibutesmodalCtrl = $controller('AttibutesmodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
