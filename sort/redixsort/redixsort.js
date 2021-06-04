/**
 * time complexity = O(nk) where n is data length and k is digits of the max number in the data set
 * should only be used if all the data to be sorted are numbers
 * altered the algo to make it work for negative numbers also
 */

const getDigit = (num, place) => {
    return Math.floor(Math.abs(num)/Math.pow(10, place))%10;
}

const digitCount = (num) => {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const sortNumbers = (numArray = [], maxDigitsCount = 0) => {
    if(!Array.isArray(numArray) || numArray.length === 0) {
        return [];
    }
    let listBucket = [];
    let sortedArray = [ ...numArray ];
    for (let i = 0; i < maxDigitsCount; i++) {
        sortedArray.forEach((num) => {
            const ithPlaceValue = getDigit(num, i);
            if (!listBucket[ithPlaceValue]) {
                listBucket[ithPlaceValue] = [];
            }
            listBucket[ithPlaceValue].push(num);
        });
        sortedArray = [];
        listBucket.forEach((list) => {
            list.forEach((num) =>{
                sortedArray.push(num);
            })
        });
        listBucket = [];
    }
    return sortedArray;
}

const redixSort = (numArray = []) => {
    let isAllNumeric = true;
    let maxPositiveDigitsCount = 0;
    let maxNegetiveDigitsCount = 0;
    const positiveBucket = [];
    const negativeBucket = [];
    numArray.forEach((num) => {
        if(isNaN(num)) {
            isAllNumeric = false;
        }
        else {
            if(num < 0 ) {
                negativeBucket.push(num);
                maxNegetiveDigitsCount = maxNegetiveDigitsCount < digitCount(num) ? digitCount(num) : maxNegetiveDigitsCount;
            }
            else {
                positiveBucket.push(num);
                maxPositiveDigitsCount = maxPositiveDigitsCount < digitCount(num) ? digitCount(num) : maxPositiveDigitsCount;
            }
        }
    });
    if(!isAllNumeric) {
        return [];
    }
    return sortNumbers(negativeBucket, maxNegetiveDigitsCount).reverse().concat(sortNumbers(positiveBucket, maxPositiveDigitsCount));
};

const initiateRedixSort = (arr) => {
    const startTime = Date.now();
    const sortedArray = redixSort(arr);
    const endTime = Date.now();
    let message = ''
    if (sortedArray.length !== arr.length) {
        message = 'Invalid data received';
    }
    return {
        sortingType: 'Redix Sort',
        startTime,
        endTime,
        executionTime: endTime-startTime,
        sortedArray,
        message
    }
    
};

module.exports = initiateRedixSort;