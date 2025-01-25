/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    arr.forEach((item, idx) => {
        result.push(fn(item, idx));
    })
    return result;
};