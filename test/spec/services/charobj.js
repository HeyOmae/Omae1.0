'use strict';

describe('Service: CharObj', function () {

  // load the service's module
  beforeEach(module('heyOmaegithubioApp'));

  // instantiate service
  var CharObj;
  beforeEach(inject(function (_CharObj_) {
    CharObj = _CharObj_;
  }));

  it('should do something', function () {
    expect(!!CharObj).toBe(true);
  });

});
