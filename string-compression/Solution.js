/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let ctr = 1
    let prevChar = chars[0]
    let arr = [chars[0]]
    for (let i = 1; i < chars.length; i++) {
        if (prevChar === chars[i]) {
            ctr++
            continue
        } else if (ctr === 1) {
            prevChar = chars[i]
            arr.push(chars[i])
        } else {
            arr.push(...ctr.toString().split(""))
            arr.push(chars[i])
            prevChar = chars[i]
            ctr = 1
        }
    }
    if (ctr > 1) arr.push(...ctr.toString().split(""))
    return arr
}
