// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = []
    
    for (let i = 0; i < s.length; i++){
        if (s[i] !== arr[arr.length-1]){
            arr.push(s[i])
        }
        else {
            arr.pop()
        }
        
    }
    return arr.join("")
};