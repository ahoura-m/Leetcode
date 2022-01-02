// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let lowPrice = prices[0]
    let result = 0
    prices.forEach(el => {
        if (el < lowPrice){
            lowPrice = el
        }
        if ((el-lowPrice) > result){
            result = el - lowPrice
        }
    });
    return result
};