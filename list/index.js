const SinglyLinkedList = require('./linkedList/linkedlist');
const DoublyLinkedList = require('./linkedList/doublyLinkedList')

const list = new SinglyLinkedList();
list.push(10);
list.unshift(1);
list.push(2);
list.push(3);
list.shift()
console.log(list.toArray());
list.insert(1,1)
console.log(list.toArray());
list.insert(4,4)
console.log(list.toArray());
list.remove(2)
console.log(list.toArray());
list.remove(0)
console.log(list.toArray());
list.reverse();
console.log(list.toArray());
console.log(list.toString());
console.log(list.toString(','));

const DList = new DoublyLinkedList();
DList.push(10);
DList.unshift(1);
DList.push(2);
DList.push(3);
DList.shift()
console.log(DList.toArray());
DList.insert(1,1)
console.log(DList.toArray());
DList.insert(4,4)
console.log(DList.toArray());
DList.remove(2)
console.log(DList.toArray());
DList.remove(0)
console.log(DList.toArray());
DList.reverse();
console.log(DList.toArray());
console.log(DList.toString());
console.log(DList.toString(','));