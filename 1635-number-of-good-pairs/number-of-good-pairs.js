/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    const count = {};
    let goodPairs = 0;

    for (let num of nums) {
        if (count[num]) {
            goodPairs += count[num];
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }
    return goodPairs;
};