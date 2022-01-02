// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let counter = 0
    let k = 0
    let answer = []
    for (let i=0; i<boxes.length; i++){
        k=0
        counter=0
        while (k<boxes.length){
            if (k==i){
                k++
                continue
            }
            if (boxes[k]==1){
                counter+= Math.abs(i-k)
            }
            k++
        }
        answer.push(counter)
    }
    return answer
};