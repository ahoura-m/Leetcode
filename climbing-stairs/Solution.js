// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}






var calcComb = function(n,r){
    return factorial(n)/(factorial(r)*factorial(n-r))
}

var climbStairs = function(n) {
    let totalCount = 1 //for 1 + 1 + 1 + ...
    if (n % 2 == 0) totalCount++
    let num2s = 1
    
    while (2*num2s < n){
        let num1s = n - 2*num2s
        totalCount += calcComb(num2s+num1s,num2s)
        //console.log(calcComb(n,num2s))
        num2s++
    }
    return totalCount
};