// https://leetcode.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCounts = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0) {
            zeroCounts++
            nums.splice(i,1)
            i--
        }
    }
    for (let j = 0; j < zeroCounts; j++){
        nums.push(0)
    }
    return nums
};