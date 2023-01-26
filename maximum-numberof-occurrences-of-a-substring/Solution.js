/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
    const map = new Map()
    const set = new Set()
    let maxNumber = 0
    for (let i = 0; i < s.length - minSize + 1; i++) {
        for (let j = minSize; j <= maxSize; j++) {
            let subStr = ""
            if (j + i > s.length + 1) continue
            for (let k = i; k < i + j; k++) {
                set.add(s[k])
                subStr = subStr.concat(s[k])
            }
            if (set.size > maxLetters) {
                set.clear()
                continue
            }
            set.clear()
            let count = map.get(subStr) + 1 || 1
            map.set(subStr, count)
            if (count >= maxNumber) maxNumber = count
        }
    }
    return maxNumber
}
