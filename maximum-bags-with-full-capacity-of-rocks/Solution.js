// https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let arr = []
    for (let i = 0; i < capacity.length; i++){
        arr.push(capacity[i] - rocks[i])
    }
    arr.sort((a,b) => a - b)

    for (let i = 0; i < arr.length; i++){
        additionalRocks -= arr[i]
        if (additionalRocks < 0) return i
    }
    return capacity.length
};