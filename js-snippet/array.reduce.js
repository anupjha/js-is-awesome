Array.prototype.newReduce = function (callback, startingValue) {
  // as starting value is an optional param
  // make a check
  let accumulator = startingValue || undefined;
  for (let index = 0; index < this.length; index++) {
    if (accumulator) {
      accumulator = callback.call(
        accumulator,
        accumulator,
        this[index],
        index,
        this
      );
    } else {
      accumulator = this[index];
    }
  }
  return accumulator;
};

//OR - simple
Array.prototype.myReduce = function (fn, initial) {
  let values = this;

  values.forEach((item) => {
    initial = initial !== undefined ? fn(initial, item) : item;
  });

  return initial;
};
