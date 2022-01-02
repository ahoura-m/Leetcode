// https://leetcode.com/problems/bitwise-and-of-numbers-range

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
    let tracker = []
    if (right > left * 2) return 0
    let firstBit = bit(left)
    for (let i = 0; i < firstBit.length; i++) {
        if (firstBit[i] == 1) tracker.push(i)
    }

    for (let i = left + 1; i < right + 1; i++) {
        let bitwise = bit(i)
        for (let j = 0; j < tracker.length; j++) {
            if (bitwise[tracker[j]] !== 1) {
                tracker.splice(j, 1)
                j--
            }
        }
        if (tracker.length <= 0) return 0
    }
    let output = 0
    console.log(tracker)
    for (let i = 0; i < tracker.length; i++) {
        output += 2 ** (tracker[i])
    }
    return output
}

const bit = (num) => {
    let arr = []
    let i = 0
    while (num > 0) {
        arr.push(num % 2)
        num = Math.floor(num / 2)
        i++
    }
    return arr
}