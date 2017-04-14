"use strict";

describe('Feature Test:', function() {
  let plane;
  let airport;

  beforeEach(function () {
    plane   = new Plane();
    airport = new Airport();
  });
  it("plane can land at airport", function () {
    plane.land(airport);
   expect(airport.planes()).toContain(plane);
  });
  it('planes can be take off from airport', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });



});
