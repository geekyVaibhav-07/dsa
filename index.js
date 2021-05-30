const mergeSort = require('./sort/mergesort/mergesort');
const quickSort = require('./sort/quicksort/quicksort');
const generateRandomArray = require('./randomData/array/randomArray');

const dataToTest = generateRandomArray(2000, 99999999);

const mergeSortResult = mergeSort(dataToTest);
const quickSortResult = quickSort(dataToTest);

console.log(mergeSortResult);
console.log(quickSortResult);