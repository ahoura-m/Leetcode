// https://leetcode.com/problems/count-items-matching-a-rule

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let counter = 0
    if (ruleKey=="color"){
        for (let i=0; i<items.length; i++){
            if (items[i][1]==ruleValue){
                counter++
            }
        }
    }
    else if (ruleKey=="type"){
        for (let i=0; i<items.length; i++){
            if (items[i][0]==ruleValue){
                counter++
            }        
        }
    }
    else if (ruleKey=="name"){
        for (let i=0; i<items.length; i++){
            if (items[i][2]==ruleValue){
                counter++
            }        
        }
    }
    return counter
};