/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    function numericCompare(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    return 0;
}
    return arr.sort((a,b) => fn(a) - fn(b));
};