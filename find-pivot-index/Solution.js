// https://leetcode.com/problems/find-pivot-index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let left = 0
        let right = 0
        let k = 0
        while (k<i){
            left+=nums[k]
            k++
        }
        k=0
        while (len-k-1 > i){
            right+=nums[len-k-1]
            k++
        }
        if (left===right){
            return i
        }
        
    }
    return -1
};