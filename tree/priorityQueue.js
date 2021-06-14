class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
};

class PriorityQueue {
    constructor(priority = 'low') {

        /**
         * if priority = low, node with lower priority value will hgave high priority and vice versa
         */
        this.values = [];
        this.highPriority = priority;
    }

    /**
     * 
     * @param {*} index1 
     * @param {*} index2 
     * @returns depeding upon priority order, returns true if node at index1 has higher priority than node at index2
     */
    hasHighPriority(index1, index2) {
        if (!this.values[index1]) {
            return false
        }
        if (this.values[index1] && !this.values[index2]) {
            return true;
        }
        if (this.highPriority === 'high') {
            return this.values[index1].priority > this.values[index2].priority;
        }
        return  this.values[index1].priority < this.values[index2].priority;
    }

    swap(index1, index2) {
        const temp = this.values[index2];
        this.values[index2] = this.values[index1];
        this.values[index1] = temp;
    }

    enQueue(value, priority) {
        if (!value || !priority) {
            return undefined;
        }

        const node = new Node(value, priority);

        const bubbleUp = (index = this.values.length-1) => {
            const parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex] && this.hasHighPriority(index, parentIndex)) {
                this.swap(index, parentIndex);
                bubbleUp(parentIndex);
            }
        }

        /**
         * alaways push the node at the end of the list and then bubbleup accrording to their priority
         */
        this.values.push(node);
        if(this.values.length > 1) {
            bubbleUp();
        }
        return this;
    }

    deQueue() {
        const sinkDown = (index = 0) => {
            const leftChildIndex = 2*index+1;
            const rightChildIndex = 2*index+2;
            const greaterChildIndex = this.hasHighPriority(leftChildIndex, rightChildIndex) ? leftChildIndex : rightChildIndex;
            if (this.values[greaterChildIndex] && this.hasHighPriority(greaterChildIndex, index)) {
                this.swap(greaterChildIndex, index);
                sinkDown(greaterChildIndex);
            }
        } 
        
        /**
         * Max is always at the root (which means first element in the array). the steps are:
         * Remove the max element and then make sure that all the other elemetns are following the defined rules. One way of doing it is
         *  -swap first elemt and last element.
         *  -pop ( to get the last element which is max because of the swap)
         *  -sink down the first element (which is root element) to find its correct position. Keep swaping it to its greater child as long as one of
         *   the child is greater than the parent 
         */
        this.swap(0, this.values.length-1);
        const max = this.values.pop();
        sinkDown();
        return max;

    }

    getPriorityQueue() {
        return this.values
    }
}

module.exports = PriorityQueue;
