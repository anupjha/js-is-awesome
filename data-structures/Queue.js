/*
# Queue

Queues are very similar to stacks however they use the “first-in-firstout” paradigm. This means that the oldest element (the element that was added first) is the next item to be removed.

#### Use Cases For Queues

Queues are similar to linked lists (which we’ll cover next) and are typically used in breadth-first searches for trees (which we’ll also cover in a subsequent section. You may also see queues being used to implement cache.

#### Downsides Of Queues

Queues are much more difficult to update when adding and removing items than a stack because we’re adding items to one side of the structure and removing them from the other side.
*/

// Using Arrays

export default class Queue {
  constructor() {
    this.queue = [];
  }
  get length() {
    return this.queue.length;
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.length === 0;
  }
}
