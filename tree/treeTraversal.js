const Queue = require('../queue/queue');

const breadthFirstSearch = (binaryTreeRoot) => {
    const queue = new Queue();
    const result = [];
    queue.enQueue(binaryTreeRoot);
    while(queue.getSize()) {
        const node = queue.deQueue();
        result.push(node.value);
        if(node.left) {
            queue.enQueue(node.left);
        }
        if(node.right) {
            queue.enQueue(node.right);
        }
    }
    return result;
};

const depthFirstPreOrder = (binaryTreeRoot) => {
    const result = [];
    const traverse = (node) => {
        result.push(node.value);
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
    };
    traverse(binaryTreeRoot);
    return result;
}

const depthFirstPostOrder = (binaryTreeRoot) => {
    const result = [];
    const traverse = (node) => {
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
        result.push(node.value);
    };
    traverse(binaryTreeRoot);
    return result;
}

const depthFirstInOrder = (binaryTreeRoot) => {
    const result = [];
    const traverse = (node) => {
        if (node.left) {
            traverse(node.left);
        }
        result.push(node.value);
        if (node.right) {
            traverse(node.right);
        }
    };
    traverse(binaryTreeRoot);
    return result;
}

/**
 * tree traversal can also be done with generator function (ES6)
 * while running the for of loop, each yield will be equivalent to one iteration
 * depeding upon hte order of yeilds, pre, post or in order traversal can be achieved
 */

function* getNodeValuesUsingGenerator(node) {
    yield node.value;
    if (node.left) {
        yield *getNodeValuesUsingGenerator(node.left);
    }
    if (node.right) {
        yield *getNodeValuesUsingGenerator(node.right);
    }
}

module.exports = {
    breadthFirstSearch,
    depthFirstPreOrder,
    depthFirstPostOrder,
    depthFirstInOrder,
    getNodeValuesUsingGenerator
}