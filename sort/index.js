const mergeSort = require('./mergeSort/mergeSort');
const quickSort = require('./quickSort/quickSort');
const bubbleSort = require('./bubbleSort/bubbleSort');
const selectionSort = require('./selectionSort/selectionSort');
const insertionSort = require('./insertionSort/insertionSort');
const redixSort = require('./redixSort/redixSort');
const sort = mergeSort; //default Sort O(nlogn)

module.exports = {
    mergeSort,
    quickSort,
    bubbleSort,
    selectionSort,
    insertionSort,
    redixSort,
    sort
}