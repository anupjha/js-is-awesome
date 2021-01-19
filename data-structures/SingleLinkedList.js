/*
Linked List

Linked lists are a series of linked nodes where each node points to the next node in the list. Each node has a value and a pointer to the next node. There are also doubly-linked lists in which each node also points to the previous node in the list.

Linked lists use the “last-in-first-out” method (similar to a stack)
where nodes are added to and deleted from the same end.

To search for a node in a linked list we have to start at the head node
(the first node in the list) and iterate through each node until we find it
or reach the end of the list. In a worst-case scenario this means that
searching for an item has a runtime of O(n) where n is the number of
items in the list.


| Value: | 'A'  | 'B'  | 'C'  | 'D'  |
|--------|------|------|------|------|
| Next:  | 'B'  | 'C'  | 'D'  | null |

{
    head: {
        value: '1',
        next: {
            value: '2',
            next: {
                value: '3',
                next: null
            }
        }
    },
    tail: {
        value: '3',
        next: null
    },
    length: 3
}

*/


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  push(value) {
    const newNode = new Node(value);
// if (!this.head)
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    /* List is empty */
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      /* There is one node in the list */
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      /* There are multiple nodes in the list */
      // Start our pointer at the head
      let currentNode = this.head;
      // We're removing the last node in the list
      const nodeToRemove = this.tail;
      // This will be our new tail
      let secondToLastNode;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }
  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    /* We want the first node */
    if (index === 0) {
      return this.head;
    }
    /* We want the last node */
    if (index === this.length - 1) {
      return this.tail;
    }
    /* We want a node somewhere in the list */
    let currentNode = this.head;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  delete(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else if (index === 0) {
      const nodeToRemove = this.head;
      this.head = this.head.next;
      this.length--;
      return nodeToRemove;
    } else {
      let currentNode = this.head;
      let previousNode;
      let iterator = 0;
      while (iterator < index) {
        iterator++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      const nodeToDelete = currentNode;
      previousNode.next = currentNode.next;
      if (previousNode.next === null) {
        this.tail = this.previousNode;
      }
      this.length--;
      return nodeToDelete;
    }
  }
  print() {
    let currNode = this.head;
    while (currNode !== null) {
      currNode = currNode.next;
    }
  }
}
const list = new LinkedList();
list.push("Emma");
list.push("Sarah");
list.push("Ivy");

deleteHead() {
  if (!this.head) return false;  this.size -= 1;  const deletedHead = this.head;  if (this.head.next) {
    this.head = this.head.next;
  } else {
    this.head = null;
    this.tail = null;
  }  return true;
}

includes(value) {
  if (!this.head) return false;  let isNode = value.constructor.name === 'LinkedListNode';
  if (isNode) value = value.value;  let currentNode = this.head;  while (currentNode) {
    if (value !== undefined && value === currentNode.value) {
      return true;
    };
    currentNode = currentNode.next;
  };  return false;
}

find(callback) {
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    return new TypeError(callback + ' is not a function');
  };  if (!this.head) return undefined;

  let currentNode = this.head;  while (currentNode) {
    if (callback && callback(currentNode.value)) {
      return currentNode;
    };
    currentNode = currentNode.next;
  };  return undefined;
}

insert(val, index) {
  if (index < 0 || index > this.length) return null;
  if (index === this.length) return this.addTail(val);
  if (index === 0) return this.addHead(val);

  let prev = this.find(index - 1),
      newNode = new Node(val),
      temp = prev.next;

  prev.next = newNode;
  newNode.next = temp;
  newNode.prev = prev;

  this.length++;
  return true;
}

update(val, index) {
  let node = this.find(index);
  if (node) node.val = val;
  return node;
}

unshift(val) {
    const newNode = new Node(val);
    //if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // add current head pointer to new head(new node), and make new node new head
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    //add 1 to length
    this.length++;

    return this;
  }

  //remove first item in list
  shift() {
    //if list is empty return false
    if (!this.head) return false;
    //get shifted node
    const shiftedNode = this.head;
    //get new head (could be NULL if list is length 2)
    const newHead = this.head.next;
    //if newHead is null, reassign tail to newHead(null)
    if (!newHead) {
      this.tail = newHead;
    }
    //assign new head
    this.head = newHead;
    //remove 1 from length
    this.length--;
    //return shiftednode
    return shiftedNode;
  }

  //change the node at the given index
  setNodeAtIndex(val, index) {
    //find the node using already built method
    const foundNode = this.getNodeAtIndex(index);
    //if the node is found update and return
    if (foundNode) {
      foundNode.value = val;
      return foundNode;
    }
    //else return null
    return null;
  }

  //insert a new node at the index with the given value
  insertAtIndex(index, val) {
    //if index not valid return false
    if (index < 0 || index > this.length) {
      return false;
    }
    //if index is zero use already built unshift
    if (index === 0) {
      return this.unshift(val);
    }
    //if index is at end of list, use already built push
    if (index === this.length) {
      return this.push(val);
    }
    // make a new node, find the nodes before and after it, make before's next the new node, and the newNode's next the after
    const newNode = new Node(val);
    const after = this.getNodeAtIndex(index);
    const before = this.getNodeAtIndex(index - 1);
    newNode.next = after;
    before.next = newNode;

    this.length++;
    return this;
  }

  // remove node from index
  removeFrom(index) {
    //if index is invalid return false
    if (index < 0 || index >= this.length) {
      return false;
    }
    //if index is at beginning use already built shift
    if (index === 0) return this.shift();
    //if index is at end use already built pop
    if (index === this.length - 1) return this.pop();
    //get before and after, set before's next to after and remove after's reference from removed Node
    const before = this.getNodeAtIndex(index - 1);
    const removedNode = this.getNodeAtIndex(index);
    before.next = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

   printList() {
    console.log(list)
    if(this.head){
      let current = this.head;
      while (current.next) {
        console.log(current);
        current = current.next;
      }
      console.log(current);
    } else {
      console.log("empty list")
    }
  }

