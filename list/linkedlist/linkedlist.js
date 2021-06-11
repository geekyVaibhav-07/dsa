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

    shift() {
        if(this.length === 0) {
            return undefined
        }
        const nodeToBeRemoved = this.head;
        this.head = this.head.next;
        this.length--;
        return nodeToBeRemoved;
    }

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

    set(value = null, index = 0) {
        const nodeToBeUpdated = this.get(index);
        if (nodeToBeUpdated) {
            nodeToBeUpdated.value = value;
            return true;
        }
        return false;
    }

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

    reverse() {
        if(this.length === 0) {
            return this;
        }
        let newHead = new Node();
        let newTail = new Node();
        let iterator = new Node();
        for (let i = 0; i < this.length; i++) {
            if (i === 0 ) {
                iterator = this.head;
                newHead = new Node(iterator.value);
                newTail = newHead;
            }
            else {
                iterator = iterator.next;
                const node = new Node(iterator.value);
                node.next = newHead;
                newHead = node;
            }
            
        }
        this.head = newHead;
        this.tail = newTail;
        return this;
    }
    
    toArray() {
        let iterator = this.head;
        const arrayList = [];
        while(iterator) {
            arrayList.push(iterator.value);
            iterator = iterator.next;
        }
        return arrayList;
    }

    toString(separator = ' ') {
        return this.toArray().join(separator);
    }

    getObject() {
        return this
    }
}

module.exports = SinglyLinedList;