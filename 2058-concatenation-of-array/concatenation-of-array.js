/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    // return [...nums, ...nums];
    let arr = new Array(nums.length * 2);

    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[i];
        arr[i + nums.length] = nums[i];
    }
    return arr;
    
};