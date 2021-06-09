const SinglyLinkedList = require('./linkedList/linkedlist')

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