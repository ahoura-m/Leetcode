// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    let j, k
    let outputArr = []
    
    for (let i = 0; i<nums.length; i++){
        if (i>0 && nums[i] == nums[i-1]) continue

        j = i+1
        k = nums.length -1
        while (j < k){
            if (nums[i]+nums[j]+nums[k] > 0) k--
            else if (nums[i]+nums[j]+nums[k] < 0) j++
            else if (nums[i]+nums[j]+nums[k] == 0) {
                outputArr.push([nums[i],nums[j],nums[k]])
                while (nums[j] == nums[j+1]) j++
                while (nums[k] == nums[k-1]) k--
                j++
                k--
            }
        }
    }
    return outputArr
};
