// https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let len = s.length
    let total = 0
    for (let i = 0; i < len; i++){
        if (s[i] == "I") {
            if ((s[i+1] == "V") || (s[i+1] == "X")){
                if (s[i+1] == "V") {
                    total+=4
                }
                if (s[i+1] == "X") {
                    total+=9
                }
                i++
                continue
            }
            else {total++}
        }
        
        if (s[i] == "V") {
            total +=5    
        }
        
        if (s[i] == "X") {            
            if ((s[i+1] == "L") || (s[i+1] == "C")){
                if (s[i+1] == "L") {
                    total+=40
                }
                if (s[i+1] == "C") {
                    total+=90
                }
                i++
                continue
            }
            else {total+=10}
        }
        
        if (s[i] == "L") {
            total+=50
        }
        
        if (s[i] == "C") {
            if ((s[i+1] == "D") || (s[i+1] == "M")){
                if (s[i+1] == "D") {
                    total+=400
                }
                if (s[i+1] == "M") {
                    total+=900
                }
                i++
                continue
            }
            else {total+=100}
        }
        
        if (s[i] == "D") {
            total+=500
        }
        if (s[i] == "M") {
            total+=1000
        }
    }
    return total
};