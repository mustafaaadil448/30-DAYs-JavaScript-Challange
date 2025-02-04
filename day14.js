/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let canceltime = setTimeout(()=>{
        fn(...args);
    },t);
    return function cancelfn(){
        clearTimeout(canceltime);
    };
};