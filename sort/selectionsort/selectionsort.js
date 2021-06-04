/**
 * 
 * @param {*} arr 
 * @param {*} index1 
 * @param {*} index2 
 */
const swap = (arr, index1, index2) => {
    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}

/**
 * as name suggests, select firt value, assume it as max or min
 * keep comparing it to maintain right max or min and in the end
 * move it at the edge of the array and repeat the process until
 * all max or min are moved at the right place
 * @param {*} arr 
 */
const selectionSort = (arr) => {
    for(let i = 0; i< arr.length-1; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++ ) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
}

const initiateSelectionSort = (arr) => {
    const startTime = Date.now();
    const sortedArray = selectionSort(arr);
    const endTime = Date.now();
    return {
        sortingType: 'Selection Sort',
        startTime,
        endTime,
        executionTime: endTime-startTime,
        sortedArray
    }
    
};

module.exports = initiateSelectionSort;
