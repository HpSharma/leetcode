/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let i = 0;
    let j = s.length - 1;
    let flag = true;
    while (i < j) {
        if (s[i] != s[j]) {
            flag = false;
        }
        i++;
        j--;
    }
    return flag;
};