if (typeof Object.create !== "function") {
  Object.create = function (o, props) {
    function F() {}
    F.prototype = o;

    if (typeof props === "object") {
      for (prop in props) {
        if (props.hasOwnProperty(prop)) {
          F[prop] = props[prop];
        }
      }
    }
    return new F();
  };
}

// Object.create Partial Polyfill
// Support for second parameter is non-standard
if (typeof Object.create !== "function") {
  Object.create = function (o, props) {
    // Create new object whose prototype is o
    function F() {}
    F.prototype = o;
    result = new F();
    // Copy properties of second parameter into new object
    if (typeof props === "object") {
      for (prop in props) {
        if (props.hasOwnProperty(prop)) {
          // Even though we don't support all of the functionality that the second
          // parameter would normally have, we respect the format for the object
          // passed as that second parameter its specification.
          result[prop] = props[prop].value;
        }
      }
    }
    // Return new object
    return result;
  };
}

// From MDN
if (typeof Object.create != "function") {
  Object.create = (function () {
    var Temp = function () {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error("Second argument not supported");
      }
      if (typeof prototype != "object") {
        throw TypeError("Argument must be an object");
      }
      Temp.prototype = prototype;
      var result = new Temp();
      Temp.prototype = null;
      return result;
    };
  })();
}