// Implement Array pollyfill
function MyArray() {
  let arr = Object.create(array.prototype);

  Object.defineProperty(arr, "length", {
    value: 0,
    enumerable: false,
    writable: true,
  });

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1;
  }

  return arr;
}

//Test
var arr = [1, 2, 3, 4];
console.log(arr.length);
