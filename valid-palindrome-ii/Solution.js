// https://leetcode.com/problems/valid-palindrome-ii

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let lengthS = s.length
    let counter = 0
    for (let i = 0; i < Math.floor(s.length/2); i++){
        if (s[i] !== s[lengthS-i-1]){
            if (isPalindrome(s.slice(0, i) + s.slice(i+1)) || isPalindrome(s.slice(0, lengthS-i-1) + s.slice(lengthS-i))) return true
            else return false
        }
    }
    return true
}; 


const isPalindrome = (s) => {
    let reversedS = s.split('').reverse().join('')
    if (s == reversedS) return true
    else return false
} 