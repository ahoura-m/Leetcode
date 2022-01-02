// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, m) {
    const map1 = new Map()
    let remain
    for (let i = 0; i < arr.length; i++){
        remain = m - arr[i]
        if (map1.has(arr[i])){
            console.log(map1.get(arr[i]))
            return [map1.get(arr[i]),i]
        }
        else {
            map1.set(remain,i)
        }
    }
}
