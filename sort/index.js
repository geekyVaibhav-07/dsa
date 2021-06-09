const mergeSort = require('./mergesort/mergesort');
const quickSort = require('./quicksort/quicksort');
const bubbleSort = require('./bubblesort/bubblesort');
const selectionSort = require('./selectionsort/selectionsort');
const insertionSort = require('./insertionsort/insertionsort');
const redixSort = require('./redixsort/redixsort');
const sort = mergeSort; //default sort O(nlogn)

module.exports = {
    mergeSort,
    quickSort,
    bubbleSort,
    selectionSort,
    insertionSort,
    redixSort,
    sort
}