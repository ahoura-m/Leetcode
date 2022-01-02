// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxSpaceCount = 0
    for (let i=0; i<sentences.length; i++){
        let spaceCount = 0
        for (let k=0; k<sentences[i].length; k++){
            if (sentences[i][k] == " "){
                spaceCount++
            }
        }
        spaceCount++
        if (spaceCount>maxSpaceCount){
            maxSpaceCount=spaceCount
        }
    }
    return maxSpaceCount
};