/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map();
    let val = 0;
    nums.forEach((i) => {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    });

    map.forEach((value, key) => {
        if (value === 1) {
            val = key;
            return;
        }
    });
    return val;
};