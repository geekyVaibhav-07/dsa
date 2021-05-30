const mergeSort = require('./sort/mergesort/mergesort');

const {
    startTime,
    endTime,
    executionTime,
    sortedArray 
} = mergeSort([2,6,9,1,4,8,3,0,5,11,14,15,12,17,71,21,22,88,99,75,34,56,73,17,39,49,52,558,3,0,5,11,14,15,12,17,71,21,22,88,99,75,]);

console.log({
    startTime,
    endTime,
    executionTime,
    sortedArray
});