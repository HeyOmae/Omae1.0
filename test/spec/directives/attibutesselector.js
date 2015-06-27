'use strict';

describe('Directive: attibutesSelector', function () {

  // load the directive's module
  beforeEach(module('heyOmaegithubioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<attibutes-selector></attibutes-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the attibutesSelector directive');
  }));
});
