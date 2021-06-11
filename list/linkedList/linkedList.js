/**
 * dobuly linked list node should have value,
 * next (pointer to next node)
 */
class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
};

class SinglyLinedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * it adds a node at the ned of the list
     * @param {*} value 
     * @returns singly linked list
     */
    push(value = null) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    /**
     * deletes the last node and returns it
     * @returns node at the tail
     */
    pop() {
        if(this.length === 0) {
            return undefined;
        }
        if(this.length === 1) {
            const popedItem = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return popedItem;
        }
        let iterator = this.head;
        while(iterator && iterator.next && iterator.next.next) {
            iterator = iterator.next;
        }
        const popedItem = iterator.next;
        iterator.next = null;
        this.tail = iterator;
        this.length--;
        return popedItem;
    }

    /**
     * shift the head to the next node
     * @returns initial head node
     */
    shift() {
        if(this.length === 0) {
            return undefined
        }
        const nodeToBeRemoved = this.head;
        this.head = this.head.next;
        this.length--;
        return nodeToBeRemoved;
    }

    /**
     * adds a node at the begining and makes it new head
     * @param {*} value 
     * @returns the singly linked list
     */
    unshift(value = null) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        if(!this.tail) {
            this.tail = node;
        }
        this.length++;
        return this;
    }

    /**
     * 
     * @param {*} index 
     * @returns node at the index
     */
    get(index = 0) {
        if (index < 0 || index >= this.length || isNaN(index)) {
            return null;
        }
        let iterator = new Node();
        for (let i = 0; i <= index; i++) {
            if(i === 0) {
                iterator = this.head;
            }
            else {
                iterator = iterator.next;
            }
        }
        return iterator
    }

    /**
     * updates the node value at index
     * @param {*} value 
     * @param {*} index 
     * @returns boolean 
     */
    set(value = null, index = 0) {
        const nodeToBeUpdated = this.get(index);
        if (nodeToBeUpdated) {
            nodeToBeUpdated.value = value;
            return true;
        }
        return false;
    }

    /**
     * inser a new node at given index
     * @param {*} value 
     * @param {*} index 
     * @returns singly linked list
     */
    insert(value = null, index = 0) {
        if (index < 0 || index > this.length || isNaN(index)) {
            return undefined;
        }
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }
        const node = new Node(value);
        let iterator = new Node();
        for (let i = 0; i < index; i++) {
            if(i === 0) {
                iterator = this.head;
            }
            else {
                iterator = iterator.next;
            }
        }
        node.next = iterator.next;
        iterator.next = node;
        this.length++;
        return this;
    }

    /**
     * removes a node from a given index
     * @param {*} index 
     * @returns removed node
     */
    remove(index = 0) {
        if (index < 0 || index >= this.length || isNaN(index)) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        let iterator = new Node();
        for (let i = 0; i < index; i++) {
            if(i === 0) {
                iterator = this.head;
            }
            else {
                iterator = iterator.next;
            }
        }
        const nodeToBeRemoved = iterator.next;
        iterator.next = iterator.next.next;
        this.length--;
        return nodeToBeRemoved;
    }

    /**
     * 
     * @returns the reversed singly linked list
     */
    reverse() {
        if(this.length === 0) {
            return this;
        }
        let node = null;
        let next = null;
        let prev = null;
        
        for (let i = 0; i < this.length; i++) {
            if (i === 0) {
                node = this.head;
                this.head = this.tail;
                this.tail = node;
                prev = node;
                next = node.next;
            }
            else {
                node  = next;
                next = node.next;
                node.next = prev;
                prev = node;
                this.head = node;
            }
        }
        this.tail.next = null;
        return this;
    }
    
    /**
     * 
     * @returns the array of all the node values
     */
    toArray() {
        let iterator = this.head;
        const arrayList = [];
        while(iterator) {
            arrayList.push(iterator.value);
            iterator = iterator.next;
        }
        return arrayList;
    }

    /**
     * 
     * @param {*} separator 
     * @returns a string of all the values separated by 'separator'
     */
    toString(separator = ' ') {
        return this.toArray().join(separator);
    }
}

module.exports = SinglyLinedList;
