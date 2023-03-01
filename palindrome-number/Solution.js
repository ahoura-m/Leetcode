/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = x.toString()
    let numDigit = str.length
    let low = 0
    let high = numDigit - 1
    while (str[low] === str[high]) {
        low++
        high--
        if (low >= high) return true
    }
    return false
}
