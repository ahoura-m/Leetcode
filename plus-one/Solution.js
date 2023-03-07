/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let i = digits.length - 1
    let remainder = 1
    if (digits[i] === 9) {
        digits[i] = 0
        i--
    } else {
        digits[i] = digits[i] + 1
        return digits
    }
    while (remainder) {
        if (i < 0) {
            digits.unshift(1)
            return digits
        }
        if (digits[i] === 9) {
            digits[i] = 0
            i--
        } else {
            digits[i] = digits[i] + 1
            return digits
        }
    }
}
