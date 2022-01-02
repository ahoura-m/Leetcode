// https://leetcode.com/problems/longest-palindrome

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) =>{
    const set = new Set()
    let ones = 0
    let odds = 0
    let totalCount = 0
    let counter
    for (let i=0; i<s.length; i++){
        if (!set.has(s[i])){
            set.add(s[i])
            counter = 1
            for (let k=i+1; k<s.length; k++){
                if (s[i]===s[k]){
                    counter++
                }
            }
            if (counter == 1){
                ones++
            }
            else if (counter%2 == 1){
                odds++
            }
            totalCount += counter
        }
        else {
            set.add(s[i])
        }
    }
    if (set.size == 1){
        return s.length
    }
    if (ones>0){
        return totalCount-ones+1-odds
    }
    if (odds>0){
        return totalCount-ones+1-odds
    }
    return totalCount
}