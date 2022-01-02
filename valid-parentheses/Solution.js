// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    key = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (let i = 0; i < s.length; i++){
        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(key[s[i]])
        }
        else if (s[i] !== stack.pop()) return false
    }
    if (stack.length) return false
    else return true
};