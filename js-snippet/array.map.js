Array.prototype.newMap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    // This is primarily to check if the item
    // exists in the array,
    if (this.indexOf(this[index]) > -1) {
      result[index] = callback(this[index], index, this);
    }
  }
  return result;
};
