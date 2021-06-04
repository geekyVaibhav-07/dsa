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
 * as name suggests, selecetd elements should bubble up,
 * meaning do a swap everytime if needed unlike in 
 * selection sort where we select and do a swap at the end of the loop
 * @param {*} arr 
 */
const bubbleSort = (arr = []) => {
    let swapMade = true;
    while (swapMade) {
        swapMade = false;
        for(let i = 0; i < arr.length; i++) {
            const j = i+1;
            if(arr[i] > arr[j]) {
                swap(arr, i, j);
                swapMade = true;
            }
        }
    }
    return arr;
}

const initiateBubbleSort = (arr = []) => {
    if(!Array.isArray(arr)) {
        return {
            sortedArray: [],
            message: 'Data should be passed in the form of an array !!!',
            status: 0
        }
    }
    const startTime = Date.now();
    const sortedArray = bubbleSort(arr);
    const endTime = Date.now();
    return {
        status: 1,
        sortingType: 'Bubble Sort',
        startTime,
        endTime,
        executionTime: endTime-startTime,
        sortedArray
    }
    
};

module.exports = initiateBubbleSort;
