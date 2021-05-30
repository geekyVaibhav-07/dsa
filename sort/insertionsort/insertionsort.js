/**
 * the function shifts the elements in clockwise direction
 * endIndex elemet shifted towrds startIndex
 * @param {*} arr 
 * @param {*} startIndex 
 * @param {*} endIndex 
 * @param {*} shiftCount 
 */
const shiftElementsCircular = (arr, startIndex = 0, endIndex = arr.length - 1) => {
    let popinElement = arr[startIndex];
    let popoutElement;
    for(let i = startIndex + 1; i <= endIndex; i ++) {
        popoutElement = arr[i];
        arr[i] = popinElement;
        popinElement = popoutElement;
    }
    arr[startIndex] = popinElement;
}

/**
 * as name suggests, we keep sorting the left part of the array by
 * inserting the right elements at the correct position
 * @param {*} arr 
 */
const insertionSort = (arr) => {
    for(let i = 1; i< arr.length-1; i ++) {
        if(arr[i] < arr [i-1]) {
            for(j = i; j >= 0; j ++) {
                if(arr[i] > arr[j]) {
                    shiftElementsCircular(arr, j+1, i);
                    break;
                }
            }
        }
    }
    return arr;
}

const initiateInsertionSort = (arr) => {
    const startTime = Date.now();
    const sortedArray = insertionSort(arr);
    const endTime = Date.now();
    return {
        sortingType: 'Insertion Sort',
        startTime,
        endTime,
        executionTime: endTime-startTime,
        sortedArray
    }
};


module.exports = initiateInsertionSort;
