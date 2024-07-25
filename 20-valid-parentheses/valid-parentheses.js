/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (value) {
    let nums = [];
    let bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < value.length; i++) {
        let char = value[i];
        if (["(", "{", "["].includes(char)) {
            nums.push(char);
        } else if ([")", "}", "]"].includes(char)) {
            if (nums.length == 0 || nums.pop() != bracketMap[char]) {
                return false;
            }
        }
    };
    return !nums.length ? true : false;
};