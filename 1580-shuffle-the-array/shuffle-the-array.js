/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let arr = [];
    for (let i = 0, j = n; i < n; i++, j++) {
        arr.push(nums[i]);
        arr.push(nums[j]);
    }
    return arr;
};