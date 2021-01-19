Array.prototype.pop = function () {
  this.length--;
  const elementToRemove = this[this.length];
  delete this[this.length];
  return elementToRemove;
};
