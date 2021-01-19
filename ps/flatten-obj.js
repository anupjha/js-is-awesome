var user = {
  firstName: "Anup",
  lastName: "Jha",
  address: {
    currentAddress: {
      city: "Bangalore",
      pincode: 560008,
    },
    permanentAddress: {
      city: "Darbhanga",
      pincode: 8460003,
    },
  },
};

/* Result:
{ user_firstName: 'Anup', user_lastName: 'Jha', user_address_currentAddress_city: 'Bangalore', user_address_currentAddress_pincode: 560008, user_address_permanentAddress_city: 'Darbhanga', user_address_permanentAddress_pincode: 8460003 }
*/

let resultObj = {};
var flattenObj = function (obj, parent) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      flattenObj(obj[key], parent + "_" + key);
    } else {
      resultObj[parent + "_" + key] = obj[key];
    }
  }
  return resultObj;
};

console.log(flattenObj(user, "user"));
