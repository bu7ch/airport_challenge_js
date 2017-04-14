function Plane() {

  this.land = function(airport) {
    airport.clearForLanding(this);
  };

  this.takeoff = function(airport) {
    airport.clearForTakeOff(this);
  }
};
