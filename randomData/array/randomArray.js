const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const generateRandomArray = (n = 1000, max = 9999999) => {
    const array = [];
    for(let i = 0; i < n; i++) {
        array.push(getRandomInt(max))
    }
    return array;
}

module.exports = generateRandomArray;
