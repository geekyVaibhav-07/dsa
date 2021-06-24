/**
 * 
 * @param {*} sum 
 * @param {*} arr array of numbers
 * @returns true if sum can be formed by using the array elements
 */
const canSum = (sum, arr = [], memo = []) => {
    if (sum in memo) {
        return memo[sum];
    }
    if (sum === 0) {
        return true;
    }
    else if (sum < 0) {
        return false;
    }
    for (const num of arr) {
        if (canSum(sum-num, arr, memo) === true) {
            memo[sum-num] = true;
            return true;
        }
    }
    memo[sum] = false;
    return false;
}

const howSum = (sum, arr = [], memo = []) => {
    if (sum in memo) {
        return memo[sum];
    }
    if (sum === 0) {
        return [];
    }
    else if (sum < 0) {
        return false;
    }
    for (const num of arr) {
        const result = howSum(sum-num, arr, memo);
        if (Array.isArray(result)) {
            memo[sum-num] = [
                num,
                ...result
            ]
            return memo[sum-num];
        }
    }
    memo[sum] = false;
    return false;
}

module.exports = {
    canSum,
    howSum
};