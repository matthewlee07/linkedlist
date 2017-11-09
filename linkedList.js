'use strict';
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Index error');
    }
    const newNode = {
      value
    };
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
      const node = this._find(idx - 1);
      //set new node's next value to previous node's next value
      newNode.next = node.next;
      //set previous node's next value to the new node
      node.next = newNode;
    }
    this.length++;
  }

  _find(idx) {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index error');
    }
    return this._find(idx).value;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index error');
    }
    if (idx === 0) {
      this.head = this.head.next;
    }
    else {
      const node = this._find(idx - 1);
      node.next = node.next.next;
    }
    this.length--;
  }
}

const sample = new LinkedList();
sample.insert(0, 31);
sample.insert(1, 21);
sample.insert(2, 11);
sample.insert(3, 10);

// console.log(sample);

// display: displays the linked list (you may also name this PrintList) - You should use this function for other exercises to show the content of your list.

function display(list) {
  while (list.head !== null) {
    // console.log(list.head.value)
    list.head = list.head.next;
  }
}

// display(sample);

function size(list) {
  let counter = 0;
  let node = list.head;
  while (node !== null) {
    counter++;
    node = node.next;
  }
  return counter;
}

// console.log(size(sample));

function isEmpty(list) {
  return list.head === null;
}

function findPrevious(list, item) {
  while (list.head !== null) {
    if (list.head.next.value === item) {
      return list.head.value;
    }
    list.head = list.head.next;
  }
}
// console.log(findPrevious(sample, 31));

function findLast(list) {
  let node = list.head;
  
  while (node.next !== null) {
    node = node.next;
    console.log(node);
  }
  return node.value;
}

//console.log(findLast(sample));
//21,42,33,24,15,46,67

function middle(list){
    
  let node = list.head;
  let count1 = 0;
  let count2 = 0;
  while (node.next !== null) {
    count1++;
    // console.log(count1);
    if(count1 % 2 === 0){
      count2++;    
    }
    node = node.next;
  }
  return list.get(count2);
   
}

//console.log(middle(sample));

function thirdFromLast(list){
  let node = list.head;
  while (node.next.next.next !== null) {
    node = node.next;
    return node;
  }
}

//console.log(thirdFromLast(sample));

function reverse(list){
  
  let node = list.head;
  while (node.next !== null) {
    node = node.next;
  }

  
    if () {
      return list.head.value;
    }
    list.head = list.head.next;
  }
}
console.log(reverse(sample));

