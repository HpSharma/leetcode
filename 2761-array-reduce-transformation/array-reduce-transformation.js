/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, c) {
    let value = c;
    if (nums.length === 0) return c; 
    for(let i = 0; i < nums.length; i++) {
        value = fn(value, nums[i]);
    }
    return value;
};