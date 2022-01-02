// https://leetcode.com/problems/license-key-formatting

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let arr = s.replaceAll('-','').split('')
    let arr1 = []
    let counter = -1
    for (let i =arr.length-1; i >= 0; i--){
        counter++
        if (counter % k === 0 && counter !== 0) arr1.unshift('-')
        arr1.unshift(arr[i])
    }
    return arr1.join('').toUpperCase()
};