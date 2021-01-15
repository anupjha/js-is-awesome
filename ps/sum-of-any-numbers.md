```
// Question: Write a function to sum any number of digits
// sum(1)(2)(3)......(n)()
let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};
let sum6 = (a) => (b) => (b ? sum(a + b) : a);
console.log(sum(1)(2)(3)());
console.log(sum6(1)(2)(3)());
```
