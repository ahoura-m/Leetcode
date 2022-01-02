// https://leetcode.com/problems/strictly-palindromic-number

/**
 * @param {number} n
 * @return {boolean}
 */

const isPalindrome = (num) =>{
    let len = num.length
    for (let i=0; i<(len/2); i++){
        if (num[i] != num[len-i-1]){
            return false
        }
    }
    return true
}


const isStrictlyPalindromic = (n) => {
    let convBase
    for (let b=2; b<n-1; b++){
        convBase = n.toString(b)
        if (!isPalindrome(convBase)){
            return false
        }
    }
    return true
};