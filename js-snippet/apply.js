// Implement Apply Method
let anup = {
  firstName: "Anup",
  lastName: "Jha",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

// Apply usages
printName.apply(anup, ["Darbhanga", "Bihar"]);

Function.prototype.myApply = function (context, args) {
  if (!Array.isArray(args)) {
    console.error("Arguments is not a array object");
    return;
  }
  const newFunc = Object.create(context || null);
  newFunc.fn = this;
  newFunc.fn(...args);
};

let printName2 = printName.myApply(anup, ["Darbhanga", "Bihar"]);
