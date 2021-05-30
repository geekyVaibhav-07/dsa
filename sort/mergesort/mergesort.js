const merge = (leftArr = [], rightArr = []) => {
    const mergedArray = [];
    let i = 0, j = 0;
    for (let counter = 0; counter < (leftArr.length + rightArr.length); counter ++) {
        if (j === rightArr.length || leftArr[i] <= rightArr[j]) {
            mergedArray.push(leftArr[i]);
            i ++;
        }
        else {
            mergedArray.push(rightArr[j]);
            j ++
        }
    }
    return mergedArray;
}

/**
 * time complexity = O(nlogn)
 * algo => split - sort & merge
 */
const mergeSort = (arr) => {
    if (arr.length > 1) {
        const leftArr = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
        const rightArr = mergeSort(arr.slice(Math.floor(arr.length/2)));
        return merge(leftArr, rightArr);
    }
    return arr;
};

const initiateMergeSort = (arr) => {
    const startTime = Date.now();
    const sortedArray = mergeSort(arr);
    const endTime = Date.now();
    return {
        startTime,
        endTime,
        executionTime: endTime-startTime,
        sortedArray
    }
    
};

module.exports = initiateMergeSort;
