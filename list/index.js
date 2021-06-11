const SinglyLinkedList = require('./linkedList/linkedlist');
const DoublyLinkedList = require('./linkedList/doublyLinkedList')

const list = new SinglyLinkedList();
list.push(10);
list.unshift(1);
list.push(2);
list.push(3);
console.log(list.toArray());
list.reverse();
console.log(list.toArray());

const DList = new DoublyLinkedList();
DList.push(10);
DList.unshift(1);
DList.push(2);
DList.push(3).push(100);
console.log(DList.shift());
console.log(DList.toArray());
DList.insert(1,1)
console.log(DList.toArray());
DList.insert(4,4)
console.log(DList.toArray());
DList.remove(2)
console.log(DList.toArray());
DList.remove(0)
console.log(DList.toArray());
console.log(DList.toArray());
console.log(DList.toString());
console.log(DList.toString(','));