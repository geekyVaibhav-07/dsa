const hash  = require('./hash');

/**
 * to avoid collision, we are using separate chaining
 * considering hash function is good and hashes are evenly distributed, the time complexities are
 *  - insertion: O(1)
 *  - deletion: O(1)
 *  - access: O(1)
 * if distrubution is not even then bascially it ius just inseritng/accessing and deleting elements from an array which will affect performance
 */
class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
    }

    set(key, value) {
        const index = hash(key, this.table.length);
        const data = [ key, value ];
        if (!this.table[index]) {
            this.table[index] = [];
        }

        /**
         * since we are using separtate chaining, if key is not rpesent in chain, push new data
         * else update the chain index with data
         */
        const indexOfKeyInChain = this.table[index].findIndex(chainElement => chainElement[0] === key);
        if (indexOfKeyInChain === -1) {
            this.table[index].push(data);
        }
        else {
            this.table[indexOfKeyInChain] = data;
        }
        return this;
    }

    get(key) {
        const index = hash(key, this.table.length);
        const valueAtIndex = this.table[index];
        if (!Array.isArray(valueAtIndex)) {
            return undefined;
        }
        const pair = valueAtIndex.find(chainElement => chainElement[0] === key);
        if (Array.isArray(pair)) {
            return pair[1];
        }
        return undefined;
    }

    getPairs() {
        const paires = [];
        this.table.forEach(chain => {
            if (chain && chain.length > 0) {
                chain.forEach(chainElement => {
                    paires.push(chainElement);
                });
            }
        })
        return paires;
    }

    keys() {
        const keys = [];
        this.table.forEach(chain => {
            if (chain && chain.length > 0) {
                chain.forEach(chainElement => {
                    chainElement && keys.push(chainElement[0]);
                });
            }
        })
        return keys;
    }

    values() {
        const values = [];
        this.table.forEach(chain => {
            if (chain && chain.length > 0) {
                chain.forEach(chainElement => {
                    chainElement && values.push(chainElement[1]);
                });
            }
        })
        return values;
    }

    delete(key) {
        return this.set(key, undefined);
    }
}

module.exports = HashTable;