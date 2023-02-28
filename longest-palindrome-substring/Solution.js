/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let largestPal = 0
    let palLength = 0
    let palindrome
    let lowerBound
    let higherBound
    for (let i = 0.5; i < s.length - 1; i = i + 0.5) {
        if ((i * 10) % 10 === 0) {
            lowerBound = i - 1
            higherBound = i + 1
        } else {
            lowerBound = i - 0.5
            higherBound = i + 0.5
        }
        while (
            (lowerBound >= 0) &
            (higherBound < s.length) &
            (s[lowerBound] === s[higherBound])
        ) {
            lowerBound--
            higherBound++
        }
        lowerBound++
        higherBound--
        palLength = higherBound - lowerBound + 1
        if (palLength > largestPal) {
            largestPal = palLength
            palindrome = s.slice(lowerBound, higherBound + 1)
        }
    }
    return palindrome || s[0]
}
