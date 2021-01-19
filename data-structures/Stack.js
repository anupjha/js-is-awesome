/*
# Stack

A stack is a “last-in-first-out” data structure which means that the newest element (or the element which was added last) in the stack will be the first one removed.

#### Benefits Of Stacks

Stacks allow for constant-time adding and removing of the top item. Constant-time, or O(1), is a very performant runtime. These actions are constant-time because we don’t need to shift any items around to pop off the top item in the stack.

#### Downsides Of Stacks

Stacks, unfortunately don’t offer constant-time access to the Nth item in the stack, unlike an array. So if we want to access the third book, we would have to pop off each item in our stack until we reach the 3rd book, and if we want to access the first item in the stack (the bottom element) we have to iterate through each book on top of it and pop it off; this has a worst-case runtime of O(n) where n is the number of books in the stack.

By contrast we can access specific indices in arrays with bracket notation. If we want the third item in an array we can access it in constant time with array[2].

*/
// Using an Array

class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    if (this.isEmpty() === false) {
      return this.stack.pop();
    }
    return;
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

// Using an Object

class Stack {
  constructor() {
    this.count = 0;
    this.data = {};
  }

  get length() {
    return this.count;
  }

  push(item) {
    this.data[this.count] = item;
    this.count++;
  }

  pop() {
    this.count--;
    delete this.data[this.count];
  }

  peek() {
    return this.data[this.count];
  }

  isEmpty() {
    return this.count === 0;
  }
}

// Using Functions

function Stack() {
  this.stack = [];

  Stack.prototype.size = function () {
    return this.stack.length;
  };
  Stack.prototype.length = this.stack.length;

  Stack.prototype.push = function (item) {
    this.stack.push(item);
  };

  Stack.prototype.pop = function () {
    return this.stack.pop();
  };

  Stack.prototype.peek = function () {
    return this.stack[this.length - 1];
  };

  Stack.prototype.isEmpty = function () {
    return this.size === 0;
  };
}

//Test
const s = new Stack();
s.push("a");
s.push("b");
s.push("c");
s.pop();
console.log(s.size());
console.log(s.isEmpty());
console.log(s);
