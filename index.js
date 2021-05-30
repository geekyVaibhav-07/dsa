const {
    mergeSort,
    quickSort,
    bubbleSort,
    selectionSort,
    insertionSort
} = require('./sort');
const generateRandomArray = require('./randomData/array/randomArray');

const dataToTest = generateRandomArray(2000, 99999999);

const mergeSortResult = mergeSort(dataToTest);
console.log(mergeSortResult);

const quickSortResult = quickSort(dataToTest);
console.log(quickSortResult);

const bubbleSortResult = bubbleSort(dataToTest);
console.log(bubbleSortResult);

const selectionSortResult = selectionSort(dataToTest);
console.log(selectionSortResult);

const insertionnSortResult = insertionSort(dataToTest);
console.log(insertionnSortResult);



