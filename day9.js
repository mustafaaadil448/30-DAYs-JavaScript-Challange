/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
let args = [5,10,8,7,3];
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */