/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let trig = true
    let ctr = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (trig & (s[i] === " ")) continue
        else if (s[i] !== " ") {
            trig = false
            ctr++
        } else return ctr
    }
    return ctr
}

// Or in JS you can do all of that in one line

var lengthOfLastWord1 = function (s) {
    return s.trim().split(" ").at(-1).length
}
