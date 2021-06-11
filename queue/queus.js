/**
 * Queue is a FIFO data structure
 * FIFO: First In First Out
 * We need to maintain the pointer to first node and last node
 * enQueue: O(1)
 * deQueue: O(1)
 */

/**
 * node should have value and pointer to next node
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.size = 0;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enQueue(value = null) {
        const node  = new Node(value);
        if(this.size > 0) {
            this.tail.next = node
            this.tail = node;
            this.size++;
            return this;
        }
        else {
            this.head = node;
            this.tail = node;
            this.size++;
            return this; 
        }
    }

    deQueue() {
        if(this.size === 0) {
            return undefined;
        }
        else if(this.size === 1) {
            const nodeToBeRemoved = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return nodeToBeRemoved.value;
        }
        else {
            const nodeToBeRemoved = this.head;
            this.head = this.head.next;
            this.size--;
            return nodeToBeRemoved.value;
        }
    }

    toArray() {
        const arrayList = [];
        let iterator = this.head;
        while(iterator) {
            arrayList.push(iterator.value);
            iterator = iterator.next;
        }
        return arrayList;
    }

    toString(seperator = ' ') {
        return this.toArray().join(seperator);
    }
}

module.exports = Queue
