/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = new Object();
    return function(...args) {
        let key = JSON.stringify(args);
            if (key in cache){
                return cache[key];
            }
            let result = fn(...args);
            cache[key] = result;
            return result;
        }
}

