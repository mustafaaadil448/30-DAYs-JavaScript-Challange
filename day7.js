/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length>0){
        let result = 0;
        for(let i = 0; i<nums.length; i++){
            result = fn(init,nums[i]);
            init = result;
        }
        return result;
    }else {
        return init;
    }
};