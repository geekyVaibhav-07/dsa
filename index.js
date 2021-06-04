const {
    mergeSort,
    quickSort,
    bubbleSort,
    selectionSort,
    insertionSort,
    redixSort,
    sort
} = require('./sort');
const generateRandomArray = require('./randomData/array/randomArray');

const dataToTest = generateRandomArray(20000, 99999999);

const redixSortResult = redixSort(dataToTest);
console.log(redixSortResult);

const mergeSortResult = mergeSort(dataToTest);
console.log(mergeSortResult);

const quickSortResult = quickSort(dataToTest);
console.log(quickSortResult);

const bubbleSortResult = bubbleSort(dataToTest);
console.log(bubbleSortResult);

const selectionSortResult = selectionSort(dataToTest);
console.log(selectionSortResult);

const insertionSortResult = insertionSort(dataToTest);
console.log(insertionSortResult);

const sortResult = sort(dataToTest);
console.log(sortResult);


