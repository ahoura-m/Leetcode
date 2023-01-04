/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    tasks.sort((a, b) => a - b)
    console.log(tasks)
    let currentDifficulty = tasks[0]
    let currentCnt = 1
    let output = 0
    for (let i = 1; i < tasks.length; i++) {
        if (tasks[i] == currentDifficulty) currentCnt++
        else {
            if (currentCnt < 2) return -1
            if (currentCnt % 3 === 0) output += currentCnt / 3
            else if (currentCnt % 3 === 2)
                output += Math.floor(currentCnt / 3) + 1
            else {
                output += Math.floor(currentCnt / 3) + 1
            }
            currentDifficulty = tasks[i]
            currentCnt = 1
        }
    }
    if (currentCnt < 2) return -1
    if (currentCnt % 3 === 0) output += currentCnt / 3
    else if (currentCnt % 3 === 2) output += Math.floor(currentCnt / 3) + 1
    else {
        output += Math.floor(currentCnt / 3) + 1
    }
    return output
}