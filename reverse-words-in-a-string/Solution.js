// https://leetcode.com/problems/reverse-words-in-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let output = " "
    let array = s.split(" ").reverse()
    
    for (let i = 0; i<array.length; i++){
        if (array[i] != "") output = output.concat(array[i], " ")
    }
    return output.trim()
};