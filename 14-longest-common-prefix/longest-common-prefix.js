/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < strs[i].length && j < prefix.length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = strs[i].substring(0, j);
        if (prefix == "") return "";
    }

    return prefix;

};