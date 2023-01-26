/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        let a = false
        let b = false
        let c = false
        let k = i + 1
        if (s[i] === "a") a = true
        else if (s[i] === "b") b = true
        else if (s[i] === "c") c = true
        while (k < s.length) {
            if (s[k] === "a") a = true
            else if (s[k] === "b") b = true
            else if (s[k] === "c") c = true
            if (a & b & c) {
                counter += s.length - k
                break
            }
            k++
        }
    }
    return counter
}
