const Stack = require('./stack/stack');
const Queue = require('./queue/queus');

const stack = new Stack();
stack.push(2).push(3).push(8);
console.log(stack.pop(), stack.pop(), stack.pop(), stack.pop());


const queue = new Queue();
queue.enQueue(2).enQueue(3).enQueue(8);
console.log(queue.toArray());
console.log(queue.deQueue(), queue.deQueue(), queue.deQueue(), queue.deQueue());