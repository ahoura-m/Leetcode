// https://leetcode.com/problems/buddy-strings

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false

    let queue = []
    let repeat
    for (let i = 0; i < s.length; i++){
        if (s[i] !== goal[i]) queue.push(i)
        else {
            if (s.indexOf(s[i]) !== i) repeat = true
        }
    }
    
    if (!(queue.length == 2 || queue.length == 0)) return false
    
    if (queue.length == 2 && s[queue[0]] === goal[queue[1]] && s[queue[1]] === goal[queue[0]]) return true
    
    if (queue.length == 0 && repeat) return true
    else return false
};