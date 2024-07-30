/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let numbers = new Set();

    while (n != 1 && !numbers.has(n)) {
        numbers.add(n);
        n = checkSum(n);
    }
    return n == 1;
};

const checkSum = (num) => {
    let sum = 0;
    while(num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}