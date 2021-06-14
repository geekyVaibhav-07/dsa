/**
 * We are sotring maxHeap in an array and use heap properties to mock all the behavior of max/min heap
 * if stored in an array:
        - child for parent at index n can be found at 2n+1 and 2n+2 index
        - preant of node at index n can be found at Math.floor((n-1)/2)
 */
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    swap(index1, index2) {
        const temp = this.values[index2];
        this.values[index2] = this.values[index1];
        this.values[index1] = temp;
    }

    insert(value = 0) {
        const bubbleUp = (index = this.values.length-1) => {
            const parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex] && this.values[parentIndex] < this.values[index]) {
                this.swap(index, parentIndex);
                bubbleUp(parentIndex);
            }
        }

        /**
         * always insert element at the end of the array (array.push)
         * and then comapre with its parent node value (aprent index is Math.floor((n-1)/2))
         * if it doesn't matches the criteria (parent should be greater in max heap)
         * bubble inserted elemetn up by swappin it with aprent and then check again with its parent 
         * until it finds the right spot in the heap (or array)
         */
        this.values.push(value);
        if(this.values.length > 1) {
            bubbleUp();
        }
        return this;
    }

    extractMax() {
        const sinkDown = (index = 0) => {
            const leftChildIndex = 2*index+1;
            const rightChildIndex = 2*index+2;
            const greaterChildIndex = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex;
            if (this.values[greaterChildIndex] && this.values[greaterChildIndex] > this.values[index]) {
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

    find(value) {
        return this.value.includes(value);
    }

    getHeap() {
        return this.values
    }
}

module.exports = MaxBinaryHeap;