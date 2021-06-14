/**
 * Stack is a LIFO data structure
 * LIFO: Last In First Out
 * We only need to maintain the pointer to last(top) node
 * push: O(1)
 * pop: O(1)
 */

/**
 * node should have value and pointer to previous node
 */
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        node.prev = this.top;
        this.top = node;
        this.size++;
        return this
    }

    pop() {
        if (this.top) {
            const nodeToBePoped = this.top;
            this.top = this.top.prev || null;
            this.size--;
            return nodeToBePoped.value;
        }
        return undefined;
    }

    getSize() {
        return this.size;
    }

    toArray() {
        const arrayList = [];
        let iterator = this.top;
        while(iterator) {
            arrayList.push(iterator.value);
            iterator = iterator.prev;
        }
        return arrayList;
    }

    toString(seperator = ' ') {
        return this.toArray().join(seperator);
    }
}

module.exports = Stack;