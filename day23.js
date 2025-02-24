/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, item) =>{
        let key = fn(item);
        if(!grouped[key]){
            grouped[key]=[];
        }
        grouped[key].push(item);
        return grouped;
    },{});
};