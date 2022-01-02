// https://leetcode.com/problems/isomorphic-strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const mapS = new Map()
    for (let i=0; i<s.length; i++){
        if (!mapS.get(s[i])) {
            mapS.set(s[i],t[i])
        }
        if (mapS.get(s[i]) != t[i]){
            return false
        }
    }
    const mapT = new Map()
    for (let i=0; i<s.length; i++){
        if (!mapT.get(t[i])) {
            mapT.set(t[i],s[i])
        }
        if (mapT.get(t[i]) != s[i]){
            return false
        }
    }
    return true
};

console.log(isIsomorphic("paper","title"))