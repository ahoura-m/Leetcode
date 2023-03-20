/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (
            (i > 0) &
            (i < arr.length - 1) &
            (arr[i] === 0) &
            (arr[i - 1] === 0) &
            (arr[i + 1] === 0)
        ) {
            n--
            arr[i] = 1
        } else if ((i === 0) & (arr[i] === 0) & (arr[i + 1] === 0)) {
            arr[i] = 1
            n--
        } else if (
            (i === arr.length - 1) &
            (arr[i] === 0) &
            (arr[i - 1] === 0)
        ) {
            arr[i] = 1
            n--
        }
        if (n <= 0) {
            return true
        }
    }
    if ((arr.length === 1) & (arr[0] === 0) & (n === 1)) return true
    return false
}
