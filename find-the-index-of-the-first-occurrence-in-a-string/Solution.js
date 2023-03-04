/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let nIndex = 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[nIndex]) {
            nIndex++
        } else {
            i = i - nIndex
            nIndex = 0
        }
        if (nIndex === needle.length) return i - needle.length + 1
    }
    return -1
}

// This can also be done by the built in indexOf method in one line
var strStr1 = function (haystack, needle) {
    return haystack.indexOf(needle)
}
