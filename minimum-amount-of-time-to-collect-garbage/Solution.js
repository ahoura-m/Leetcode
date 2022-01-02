// https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
const sumArrN = (arr,n) => {
    let sum = 0
    for (let i = 0; i<n; i++){
        sum += arr[i]
    }
    return sum
}

var garbageCollection = function(garbage, travel) {
    let lastHoG,lastHoP,lastHoM
    let time = 0
    for (let i=0; i<garbage.length; i++){
        for (let k=0; k<garbage[i].length; k++){
            if (garbage[i][k] == "G"){
                time++
                lastHoG = i
            }
            else if (garbage[i][k] == "P"){
                time++
                lastHoP = i
            }
            else if (garbage[i][k] == "M"){
                time++
                lastHoM = i
            }
    }
    }
    if (lastHoG){
        time += sumArrN(travel,lastHoG)
    }
    if (lastHoM){
        time += sumArrN(travel,lastHoM)
    }
    if (lastHoP){
        time += sumArrN(travel,lastHoP)
    }
    return time
}