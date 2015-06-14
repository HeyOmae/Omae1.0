'use strict';

describe('Service: PriorityOptions', function () {

  // load the service's module
  beforeEach(module('heyOmaegithubioApp'));

  // instantiate service
  var PriorityOptions;
  beforeEach(inject(function (_PriorityOptions_) {
    PriorityOptions = _PriorityOptions_;
  }));

  it('should do something', function () {
    expect(!!PriorityOptions).toBe(true);
  });

});
