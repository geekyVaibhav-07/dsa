const memoizedFib = (n, memo = {}) => {
    if (n <=2 ) {
        return 1;
    }
    if (memo[n]) {
        return memo[n];
    }
    memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
    return memo[n];
}

const tabulatedFib = (n) => {
    const fib = [ 0, 1, 1 ];
    for (let i = 3; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

module.exports = {
    memoizedFib,
    tabulatedFib,
    fib: memoizedFib,
}