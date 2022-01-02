// https://leetcode.com/problems/is-subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let i =0
    lenS = s.length
    if (!s && !t){return true}
    for (let j=0; j<t.length; j++){
        if (t[j] == s[i]){
            i++
        }
        if (i == lenS){
            return true
        }
    }
    return false
};