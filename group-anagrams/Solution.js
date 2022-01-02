// https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let outputArr = []
    let sortedStr
    let count = 0
    const map = new Map()
    
    for (let i=0; i < strs.length; i++){
        sortedStr = strs[i].split('').sort().join('')
        if (map.has(sortedStr)){
            outputArr[map.get(sortedStr)].push(strs[i])
        }
        else{
            outputArr.push([strs[i]])
            map.set(sortedStr,count)
            count++
        }
    }
    return outputArr
};