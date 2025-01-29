/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let l = functions.length-1;
        if(l < 0 ) return x;
        for(l; l>=0; l--){
            const fn =functions[l];
            x = fn(x);
        };
        return x;
        
    };
};