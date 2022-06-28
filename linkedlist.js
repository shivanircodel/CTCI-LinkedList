class Node {
  contructor {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  contructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
     var node = new Node(val);
    if (this.head == null) {
      // Empty List
      this.head = node;
      this.tail = node;
    } else {
      // Not Empty List
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  
  pop() {
    if (!this.head) return undefined;
    var currentNode = this.head;
    var newTail = currentNode;
    
    while(currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
  }
    
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    
    return currentNode;
  }
  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
    
    if(this.length == 0) {
      this.tail == null; 
    }
    
    return currentNode;
  }
  unshift(val) {
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head
    
    }
    
    this.length++:
    
  }
  
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var currentNode = this.head;
    while(counter != index) {
      currentNode = currentNode.next;
      counter++;
  
}

var list = new LinkedList();
list.push(5);
list.push(7);
list.push(0);
list.pop();
list.shift();
list;


// 5 -> 4 -> 7 -> 9
// 5
