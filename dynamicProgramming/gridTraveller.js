/**
 * having a mattrix of row = m and column = n dimensions, find total number of ways to reach to the last tile T(m,n) from the begining if we are only allowed to tarvel to right and down directions.
 */


const gridTraveller = (mattrixSize = '50,50', currentPosition = '0,0', memo = {}) => {
    if (memo[currentPosition]) {
        return memo[currentPosition];
    }
    const [ currentRow, currentColumn ] = currentPosition.split(',').map(number => parseInt(number));
    const [ maxRow, maxColumn ] = mattrixSize.split(',').map(number => parseInt(number));
    if (currentColumn > maxColumn || currentRow > maxRow) {
        return 0;
    }
    else if (currentPosition === mattrixSize) {
        return 1;
    }
    else {
        const newRow =  currentRow + 1;
        const newColumn = currentColumn + 1;
        memo[currentPosition] = gridTraveller(mattrixSize, `${newRow},${currentColumn}`, memo) + gridTraveller(mattrixSize, `${currentRow},${newColumn}`, memo);
        return memo[currentPosition];
    }
}


module.exports = gridTraveller;