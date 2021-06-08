const SinglyLinkedList = require('./linkedList/linkedlist')

const list = new SinglyLinkedList(1);
for (let i = 2; i < 10; i++) {
    list.push(i);
}
list.push(10);
list.push(11);
list.shift();
list.pop();
list.printList();
list.reverse();
list.printList();
