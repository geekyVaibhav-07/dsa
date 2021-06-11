const swap = (arr, index1, index2) => {
    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}

/**
 * time complexity O(nlogn), depends on pivot
 * choose a pivot - move the pivot at right postition and make sure that all 
 * left elements are less than pivot element and all
 * right elements are greater than pivot
 * quickSort left and right again recurrsively
 * @param {*} arr 
 * @param {*} startIndex 
 * @param {*} endIndex 
 * @returns 
 */
const quickSort = (arr = [], startIndex = 0, endIndex = arr.length-1) => {
    if (startIndex <= endIndex) {
        const pivot = startIndex;
        let rightCounter = pivot;
        for(let i = startIndex; i <= endIndex; i++) {
            if(arr[i] < arr[pivot] && i > pivot) {
                rightCounter++;
                swap(arr, i, rightCounter);
            }
        }
        swap(arr, pivot, rightCounter);
        quickSort(arr, startIndex, rightCounter-1);
        quickSort(arr, rightCounter+1, endIndex);
    }
    return arr;
}

const initiateQuickSort = (arr = []) => {
    if(!Array.isArray(arr)) {
        return {
            sortedArray: [],
            message: 'Data should be passed in the form of an array !!!',
            status: 0
        }
    }
    const startTime = Date.now();
    const sortedArray = quickSort([ ...arr ]);
    const endTime = Date.now();
    return {
        status: 1,
        sortingType: 'Quick Sort',
        startTime,
        endTime,
        executionTime: endTime-startTime,
        sortedArray
    }
    
};

module.exports = initiateQuickSort;
