// https://leetcode.com/problems/binary-search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i
    let k= 2
    let len = nums.length
    let high = len-1
    let low = 0
    for (i in nums){
        let mid = nums[Math.floor((high+low)/2)]
        if (target === nums[len-1]){
            return len-1
        }
        if (mid === target){
            return Math.floor((high+low)/2)
        }
        else if (mid > target){
            high = Math.floor((high+low)/2)
        }
        else{
            low = Math.floor((high+low)/2)
        }
    }
    return -1
};