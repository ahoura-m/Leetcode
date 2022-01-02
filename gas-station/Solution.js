// https://leetcode.com/problems/gas-station

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const calc = (gas,cost,i) => {
    let index
    let tank = 0
    for (let j = 0; j < gas.length; j++){
        index = i % gas.length
        i++
        tank += gas[index]
        tank -= cost[index]
        if (tank < 0) return false 
    }
    return true
}


var canCompleteCircuit = function(gas, cost) {
    for (let i = 0; i < gas.length; i++){
        if (gas[i] < cost[i]) continue
        if (gas[i] == 0) continue
        if (calc(gas,cost,i) == true) return i
    }
    return -1
};