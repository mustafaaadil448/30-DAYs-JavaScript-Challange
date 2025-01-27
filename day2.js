/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentCount = -2
    return function() {
        return n++;
        
    };
};