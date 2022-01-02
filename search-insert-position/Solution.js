// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let begin = 0
    let end = nums.length -1
    let mid
    while (begin <= end){
        mid = Math.floor((begin+end)/2)

        if (target === nums[mid]) return mid
        if (target < nums[mid]) end = mid - 1
        if (target > nums[mid]) begin = mid + 1
    }
    if (nums[mid] > target) return mid
    if (nums[mid] < target) return mid + 1
}