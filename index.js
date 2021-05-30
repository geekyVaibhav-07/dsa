const mergeSort = require('./sort/mergesort/mergesort');
const quickSort = require('./sort/quicksort/quicksort');
const bubbleSort = require('./sort/bubblesort/bubblesort');
const generateRandomArray = require('./randomData/array/randomArray');

const dataToTest = generateRandomArray(2000, 99999999);

const mergeSortResult = mergeSort(dataToTest);
console.log(mergeSortResult);

const quickSortResult = quickSort(dataToTest);
console.log(quickSortResult);

const bubbleSortResult = bubbleSort(dataToTest);
console.log(bubbleSortResult);



