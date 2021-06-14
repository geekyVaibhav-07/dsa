const BinarySearchTree = require('./binarySearchTree');
const { breadthFirstSearch, depthFirstPreOrder, depthFirstPostOrder, depthFirstInOrder } = require('./treeTraversal'); 
const MaxBinaryHeap = require('./maxBinaryHeap');

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55);
console.log(maxHeap.getHeap());
console.log(maxHeap.extractMax());
console.log(maxHeap.getHeap());
console.log(maxHeap.extractMax());
console.log(maxHeap.getHeap());

module.exports = {
    BinarySearchTree,
    breadthFirstSearch,
    depthFirstPreOrder,
    depthFirstPostOrder,
    depthFirstInOrder
}