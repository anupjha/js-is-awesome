Array.prototype.filter = function (cb) {
  let result = array();

  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const element = this[index];

      if (cb(element, index)) {
        result.push(element);
      }
    }
  }

  return result;
};

//OR
Array.prototype.newFilter = function (callback, context) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback.call(context, this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};
