/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let output = strs[0]
    let ctr = 0
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < output.length; j++) {
            if (j > strs[i].length - 1) break
            if (output[j] === strs[i][j]) ctr++
            else break
        }
        output = output.slice(0, ctr)
        ctr = 0
        //console.log(output)
    }
    return output
}
