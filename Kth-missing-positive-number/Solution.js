/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    for (let i = 1, j = 0; ; i++) {
        if (i === arr[j]) j++
        else if (k === i - j) return i
    }
}
