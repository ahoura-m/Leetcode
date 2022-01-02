// https://leetcode.com/problems/surrounded-regions

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] == "O") trav(board,i,0)
        if (board[i][board[i].length-1] == "O") trav(board, i, board[i].length - 1)
    }
    for (let j = 0; j < board[0].length; j++){
        if (board[0][j] == "O") trav(board,0,j)
        if (board[board.length - 1][j] == "O") trav(board, board.length - 1, j)
    }

    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] == "O") board[i][j] = "X"
            if (board[i][j] == 1) board[i][j] = "O"
        }
    }
    return board
}

const trav = (clone, i, j) => {
    clone[i][j] = 1

    if (i + 1 < clone.length) {
        if (clone[i + 1][j] == "O") trav(clone, i + 1, j)
    }
    if (j + 1 < clone[0].length) {
        if (clone[i][j + 1] == "O") trav(clone, i, j + 1)
    }
    if (i - 1 >= 0) {
        if (clone[i - 1][j] == "O") trav(clone, i - 1, j)
    }
    if (j - 1 >= 0) {
        if (clone[i][j - 1] == "O") trav(clone, i, j - 1)
    }
}