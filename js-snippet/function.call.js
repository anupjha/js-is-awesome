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
    console.error("this is not a function type.");
    return null;
  }
  const obj = Object.create(context || null);
  // obj will have "name" object in __proto__
  // obj[this.name] = this;
  // obj[this.name](...args);
  obj[fn] = this;
  obj[fn](...args);
};

let printName2 = printName.myCall(anup, "Darbhanga", "Bihar");
