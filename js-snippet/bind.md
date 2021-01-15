```
// Implement Bind Method
let anup = {
  firstName: "Anup",
  lastName: "Jha",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

// bind usages
let printMyName = printName.bind(anup, "Darbhanga");

printMyName("Bihar");

Function.prototype.myBind = function (context, ...args) {
  // this refers to function before "."
  // Validation
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  let fn = this;
  let params = args.slice(1);
  return function (...args2) {
    fn.apply(context, [...args, ...args2]);
  };
};

let printMyName2 = printName.myBind(anup, "Darbhanga");
printMyName2("Bihar");
```
