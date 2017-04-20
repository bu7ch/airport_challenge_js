function Airport() {
  this._planes = []; //_planes
};

Airport.prototype.planes = function() {
  return this._planes;
};
Airport.prototype.clearForLanding = function(plane) {
  if (this.isStormy()) throw Error('cannot land during storm');
  this._planes.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if (this.isStormy()) throw Error('cannot takeoff during storm');
  var planeIndex = this._planes.indexOf(plane)
  this._planes.splice(planeIndex, 1);
};
Airport.prototype.isStormy = function() {
  return (Math.random() < 0.5) ? true : false;
}
