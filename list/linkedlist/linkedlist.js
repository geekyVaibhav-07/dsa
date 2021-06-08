class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null
    };
}

class SinglyLinkedList {
    constructor(value = null) {
        const node = new Node(value)
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    getLength() {
        return this.length;
    }

    deleteNode(position = 1) {
        if (position > this.length) {
            return undefined
        }
        let nodeToBeDeleted = {};
        if(position === 1) {
            nodeToBeDeleted = this.head;
            this.head = this.head.next;
            this.length--;
            return nodeToBeDeleted.value;
        }
        else {
            let iterator = null;
            for (let i = 1 ; i < position; i++) {
                if(i === 1) {
                    iterator = this.head;
                }
                else {
                    iterator = iterator.next
                }
            }
            nodeToBeDeleted = iterator.next;
            if(position === this.length) {
                iterator.next = null;
                this.tail = iterator;
                this.length--;
            }
            else {
                iterator.next = iterator.next.next;
                this.length--;
            }
        }
        return nodeToBeDeleted.value
    }

    ifExist(value = null) {
        let iterator = this.head;
        while(iterator) {
            if(iterator === value) {
                return true;
            }
            else {
                iterator = iterator.next;
            }
        }
        return false;
    }

    firtsOccurancePoisiton(value = null) {
        let iterator = this.head;
        let i = 1;
        while(iterator) {
            if(iterator === value) {
                return i;
            }
            else {
                iterator = iterator.next;
                i++;
            }
        }
        return -1;
    }

    occurance(value = null) {
        let iterator = this.head;
        const returnArray = [];
        let i = 1;
        while(iterator) {
            if(iterator === value) {
                returnArray.push(i);
            }
            else {
                iterator = iterator.next;
                i++;
            }
        }
        return returnArray;
    }

    shiftTail(position = this.length) {
        if (isNaN(position) || position < 1 || position > this.length) {
            return undefined
        }
        else{
            let iterator = null;
            for (let i = 1; i <= position; i++) {
                if( i ===  1) {
                    iterator = this.head;
                }
                if (i === position) {
                    this.tail = iterator;
                    this.length = position;
                }
                else {
                    iterator = iterator.next;
                }
            }
        }
    }

    shiftHead(position = 1) {
        if (isNaN(position) || position < 1 || position > this.length) {
            return undefined
        }
        else{
            let iterator = null;
            for (let i = 1; i <= position; i++) {
                if( i ===  1) {
                    iterator = this.head;
                }
                if (i === position) {
                    this.head = iterator;
                    this.length = this.length - position;
                }
                else {
                    iterator = iterator.next;
                }
            }
        }
    }

    pushAtTail(value = null) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    pushAtHead(value = null) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    pushAfterTail(value = null, position = 1) {
        if(position < this.length + 1) {
            return undefined
        }
        let iterator = null;
        for(let i = 1; i <= position; i++) {
            if(i === position) {
                iterator = new Node(value);
                this.tail.next = iterator;
                this.tail = iterator;
                this.length++;
            }
            else {
                iterator = new Node();
                this.tail.next = iterator;
                this.tail = iterator;
                this.length++;
            }
        }
    }

    push(value = null, position = this.length + 1) {
        const node = new Node(value);
        if (position === 1) {
            this.pushAtHead(value);
        }
        else if (position === this.length + 1 || isNaN(position)) {
            this.pushAtTail(value);
        }
        else if (position > this.length + 1) {
            this.pushAfterTail(value, (position - this.length));
        }
        else if (!isNaN(position) && position <= this.length) {
            let iterator = this.head;
            for (let i = 2; i < position; i++) {
                if (iterator.next) {
                    iterator = iterator.next;
                }
            }
            node.next = iterator.next;
            iterator.next = node;
            this.length++;
        }
        return value;
    }

    printList(printerFunction = console.log) {
        let iterator = null;
        for (let i = 1; i <= this.length; i++) {
            if (i === 1) {
                iterator = this.head;
            }
            else {
                iterator = iterator.next;
            }
            printerFunction(iterator.value);
        }
    }

    // default supported methods

    pop() {
        let iterator = null;
        for (let i = 1; i <= this.length -1; i++) {
            if (i === 1) {
                iterator = this.head;
            }
            else {
                iterator = iterator.next
            }
        }
        const valueToBePoped = iterator.next.value;
        iterator.next = null;
        this.tail = iterator;
        this.length--;
        return valueToBePoped;
    }

    shift() {
        const returnValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return returnValue;
    }

    unshift(value = null) {
        return this.push(value, 1);
    }

    get(position = 1) {
        if (isNaN(position || position < 1 || position > this.length)) {
            return undefined;
        }
        let iterator = null;
        for (let i = 1; i <= position; i++) {
            if ( i === 1) {
                iterator = this.head;
            }
            else if (iterator.next) {
                iterator = iterator.next;
            }
        }
        return iterator.value;
    }

    set(value = null, position = 1) {
        if (isNaN(position || position < 1 || position > this.length)) {
            return undefined;
        }
        let iterator = null;
        for (let i = 1; i <= position; i++) {
            if ( i === 1) {
                iterator = this.head;
            }
            else if (iterator.next) {
                iterator = iterator.next;
            }
            else {
                return undefined;
            }
        }
        iterator.value = value;
        return value;
    }
    
    insert(value = null, position = 1) {
        return this.push(value, position);
    }

    remove(position = 1) {
        return this.deleteNode(position);
    }

    reverse() {
        let newHead = null;
        let newTail = null;
        let iterator = null;
        for (let i = 1; i <= this.length; i++) {
            if( i === 1) {
                iterator = this.head;
                newTail = iterator;
                newHead = iterator;
            }
            else if(iterator.next) {
                iterator = iterator.next
                const newNode = new Node(iterator.value);
                newNode.next = newHead;
                newHead = newNode;
            }
        }
        this.tail = newTail;
        this.head = newHead;
    }
}

module.exports = SinglyLinkedList;