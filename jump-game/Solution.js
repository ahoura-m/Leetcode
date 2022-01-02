// https://leetcode.com/problems/jump-game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dest
    let maxDest = 0
    for (let i = 0; i < nums.length; i++){
        dest = nums[i] + i
        if (dest >= nums.length - 1) return true
        if (nums[i] == 0) return false
        let maxNum = i + 1
        for (let k = i+1; k < nums[i] + i + 1; k++){
            if (nums[k] + k >= nums[maxNum] + maxNum) maxNum = k
        }
        if (nums[maxNum] == 0) return false
        i = maxNum - 1
    }
};