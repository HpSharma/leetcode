/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let needleLength = needle.length;
    let haystackLength = haystack.length;

    if (needleLength === 0) return -1;

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let j = 0;
        while (j < needleLength && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needleLength) return i;
    }
    return -1;
};