// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = []
    
    if (n % 2 == 0){
        for (let i = 1; i <= n/2; i++) {
            arr.push(i,-i)
        }
    }
    else {
        arr.push(0)
        for (let i = 1; i <= Math.floor(n/2); i++) {
            arr.push(i,-i)
        }
    }
    
    return arr
};