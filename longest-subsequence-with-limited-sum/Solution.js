// https://leetcode.com/problems/longest-subsequence-with-limited-sum

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const binarySearch = (arr, num) => {
    low = 0
    high = arr.length - 1
    let mid
    while (low <= high){
        mid = Math.floor((high+low)/2)
        if (arr[mid] == num) return mid
        else if (arr[mid] > num) high = mid -1
        else if (arr[mid] < num) low = mid +1
    }
    return high
}


var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a - b)

    let arr = [0]
    let sum = 0
    for (let i = 0; i < nums.length; i++){
        sum += nums[i]
        arr.push(sum)
    }

    let index
    let outputArr = []
    for (let j = 0; j < queries.length; j++){
        index = binarySearch(arr,queries[j])
        outputArr.push(index)
    }
    return outputArr
};