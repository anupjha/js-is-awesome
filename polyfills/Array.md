# Implement Array

#### Class based

```JavaScript
class Array{
      constructor(){
        this.length=0;
        this.data={};
  }

  getElementAtIndex(index){
        return this.data[index];
      }

  push(element){
    this.data[this.length]=element;
    this.length++;
    return this.length;
  }

  pop(){
    const item= this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return this.data;
  }

  deleteAt(index){
    for(let i=index; i<this.length-1;i++){
      this.data[i]=this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
    return this.data;
  }

  insertAt(item, index){
    for(let i=this.length;i>=index;i--){
      this.data[i]=this.data[i-1];
    }
    this.data[index]=item;
    this.length++;
    return this.data;
  }
  print() {
    console.log(Object.values(this.data));
  }
}

const array= new Array(); //we are instantiating an object of Array class
array.push(12);
array.push("aa"); //pushing element
array.push("bb");
array.push(10);
array.push(989);
array.print();
console.log(array.length);
```

#### As Functions

```JavaScript
function array () {
  let arr = Object.create(array.prototype)

  Object.defineProperty(arr, 'length', {
    value: 0,
    enumerable: false,
    writable: true,
  })

  for (key in arguments) {
    arr[key] = arguments[key]
    arr.length += 1
  }

  return arr
}

array.prototype.push = function (element) {
  this[this.length] = element;
  this.length++
  return this.length
}

array.prototype.pop = function () {
  this.length--;
  const elementToRemove = this[this.length]
  delete this[this.length]
  return elementToRemove
}

array.prototype.filter = function (cb) {
  let result = array();
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      const element = this[index]

      if (cb(element, index)) {
        result.push(element)
      }
    }
  }

  return result
}

let friends = array('abc', 'xyz')

friends.push('jjjj')
friends.push('kkkk')

friends.pop() /

friends.filter((friend) => friend.charAt(0) !== 'J') /

```
