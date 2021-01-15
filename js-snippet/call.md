# Polyfill for Call

```
// Implement Call Method
let anup = {
  firstName: "Anup",
  lastName: "Jha",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

// Call usages
printName.call(anup, "Darbhanga", "Bihar");

Function.prototype.myCall = function (context, ...args) {
// check if this points to a function type
  if (!(this instanceof Function)) {
    console.error('this is not a function type.');
    return null;
  }
  const newFunc = Object.create(context || null);
  newFunc.fn = this;
  newFunc.fn(...args);
};

let printName2 = printName.myCall(anup, "Darbhanga", "Bihar");
```
