// array
const commentArr = [
  { id: "1", text: "add code examples" },
  { id: "2", text: "examples would be great for this article" },
  { id: "3", text: "hi there" },
];
// object
const commentObj = {
  1: { id: "1", text: "please add code examples" },
  2: { id: "2", text: "examples would be great for this article" },
  3: { id: "3", text: "hi there" },
};

// transform to array
const objectToArray = (object) => {
  return Object.keys(object).map((objKey) => object[objKey]);
};

const commentsArray = objectToArray(commentObj);
console.log(commentsArray);

// transform to object
const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    //obj[item.id] = item
    obj[item[keyField]] = item;
    return obj;
  }, {});
const commentObject = arrayToObject(commentArr, "id");
console.log(commentObject);
