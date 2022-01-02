// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count
    let longestSub = 0
    let queue
    for (let i = 0; i < s.length; i++){
        queue = []
        count = 1
        queue.push(s[i])
        for (let j = i+1; j < s.length; j++){
            if (queue.indexOf(s[j]) == -1){
                count++
                queue.push(s[j])
            }
            else break
        }
        if (count > longestSub) longestSub = count
    }
    return longestSub
};