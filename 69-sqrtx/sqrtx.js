/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;

    let left = 1, right = x, result = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midSquare = mid * mid;

        if (midSquare == x) {
            return mid;
        } else if (midSquare < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};