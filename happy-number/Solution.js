// https://leetcode.com/problems/happy-number

/**
 * @param {number} n
 * @return {boolean}
 */
function sq(num) {
  let sum = 0;
  while (num > 0) {
    let d = num % 10;
    sum += d * d;
    num = Math.floor(num/10);
  }
  return sum;
}


var isHappy = function(n) {
    let slow,fast
    slow = n
    fast = n
    while (true){
        slow = sq(slow)
        fast = sq(sq(fast))
        if (fast == 1) return true
        if (slow == fast) break
    }
    return fast == 1
};