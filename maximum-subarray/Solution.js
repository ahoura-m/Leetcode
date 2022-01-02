// https://leetcode.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    let max = Math.max(...nums)
    let prevSum = Math.max(...nums)
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] <= 0) continue
        prevSum = nums[i]
        for (let j = i+1; j < nums.length ; j++){
            prevSum += nums[j]
            if (prevSum > max) max = prevSum
        }
    }
    return max
};



var maxSubArray2 = function(nums) {
    let max = Math.max(...nums)
    let prevSum = Math.max(...nums)
    let j
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] <= 0) continue
        prevSum = nums[i]
        j = i + 1
        
        while (j < nums.length) {
            prevSum += nums[j]
            if (prevSum <= 0){
                i = j
                break
            }
            if (prevSum > max) max = prevSum
            j++
        }
    }
    return max
};

var maxSubArray = function(nums){
    let max = -Infinity
    let temp = 0
    for(let i = 0; i<nums.length;i++){
        temp = Math.max(nums[i], nums[i] + temp)
        max = temp > max ? temp : max
    }
    return max
};