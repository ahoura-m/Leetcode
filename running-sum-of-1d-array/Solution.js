// https://leetcode.com/problems/running-sum-of-1d-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let i
    let arr = []
    for (i in nums) {
        let k = 0
        let total = 0
        while (k <= i) {
            total += nums[k]
            k++
          }
        arr.push(total)
    }
    return arr
};