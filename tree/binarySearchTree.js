/**
 * each node wil have a value (unique vcalue in tree) and
 * pointer to left child and
 * pointer to right child
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * insert: O(logn);
 * seach: O(longn)
 */

class BinarySearchTree {
    constructor(value = null) {
        if(value) {
            this.root = new Node(value);
            this.size = 1;
        }
        else {
            this.root = null;
            this.size = 0
        }
    }

    insert(value = null) {
        if (!value) {
            return this;
        }
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            this.size++;
            return this;
        }
        let iterator = this.root;
        let parentNode= null;
        while(iterator) {
            parentNode = iterator;
            if(iterator.value < value) {
                iterator = iterator.right;
            }
            else if(iterator.value > value) {
                iterator = iterator.left;
            }
            else {
                return this;
            }
        }
        if(parentNode.value > value) {
            parentNode.left = node;
        }
        else {
            parentNode.right = node;
        }
        this.size++;
        return this;
    }

    find(value, returnNode = false) {
        let iterator = this.root;
        while(iterator) {
            if(iterator.value === value) {
                return returnNode ? iterator : true;
            }
            else if (iterator.value < value) {
                iterator = iterator.right
            }
            else {
                iterator = iterator.left;
            }
        }
        return returnNode ? undefined : false;
    }

    search(value, returnNode = false) {
        return this.find(value, returnNode);
    }

    conatins(value) {
        return this.find(value, false);
    }
}

module.exports = BinarySearchTree;