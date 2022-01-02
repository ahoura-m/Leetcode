// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers

/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = (n) => {
    let num
    let maxNum = 0
    for (let i=0; i<n.length; i++){
        num = parseInt(n[i])
        if (num > maxNum){
            maxNum = num
        }
    }
    return maxNum
};