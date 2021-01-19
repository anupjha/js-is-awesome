// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

function flatten(arr) {
  return arr.reduce(function (prev, curr) {
    if (Array.isArray(curr)) {
      prev = prev.concat(flatten(curr));
    } else {
      prev.push(curr);
    }
    return prev;
  }, []);
}

// if isArray method not available
function isArray(obj) {
  return (
    obj.constructor === Array ||
    Object.prototype.toString.call(obj) === "[object Array]"
  );
}

// Flatten based on depth
if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth) {
    // If no depth is specified, default to 1
    if (depth === undefined) {
      depth = 1;
    }
    // Recursively reduce sub-arrays to the specified depth
    var flatten = function (arr, depth) {
      // If depth is 0, return the array as-is
      if (depth < 1) {
        return arr.slice();
      }
      // Otherwise, concatenate into the parent array
      return arr.reduce(function (acc, val) {
        return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
      }, []);
    };
    return flatten(this, depth);
  };
}
