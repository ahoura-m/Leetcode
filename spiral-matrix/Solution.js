// https://leetcode.com/problems/spiral-matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let left = (down = up = false)
    let right = true
    let counter = 0
    let x = matrix[0].length //j
    let y = matrix.length //i
    let i = 0
    let j = 0
    let arr = []
    while (counter < x * y) {
        arr.push(matrix[i][j])
        matrix[i][j] = null
        if (right & checkMatrix(matrix,i,j + 1)) j++
        else if (right){
            i++
            right = false
            down = true
        }
        else if (down & checkMatrix(matrix, i+1, j)) i++
        else if (down){
            j--
            down = false
            left = true
        }
        else if (left & checkMatrix(matrix, i, j - 1)) j--
        else if (left){
            i--
            left = false
            up = true
        }
        else if (up & checkMatrix(matrix, i-1, j)) i--
        else if (up){
            j++
            up = false
            right = true
        }
        counter++
    }
    return arr
}

const checkMatrix = (matrix, i, j) => {
    let x = matrix[0].length  //j
    let y = matrix.length     //i
    
    if (j >= x || i >= y) return false
    if (matrix[i][j] == null) return false
    return true

}