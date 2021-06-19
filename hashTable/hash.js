/**
 * 
 * @param {*} data  data to be hashed
 * @param {*} arrayLength Length of the data structure (preferably a prime number)
 */
const hash = (data, arrayLength) => {
    let total = 0;
    const WIRED_PRIME = 31 // random prime number
    for (let i = 0; i < Math.min(data.length, 100); i++) {
        // % 'module' is used to ensure the resultant value range between 0 to arrayLength;
        total = (total*WIRED_PRIME + (data[i].charCodeAt(0))) % arrayLength;
    }

    return total;
}

module.exports = hash;