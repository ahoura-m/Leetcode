// https://leetcode.com/problems/number-of-islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let counter = 0
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j <grid[i].length; j++){
            if (grid[i][j] == 1){
                counter++
                trav(grid, i, j)
            }
        }
    }
    return counter
};

const trav = (grid, i, j) => {
    grid[i][j] = 0
    if (i+1 < grid.length){
        if (grid[i+1][j] == 1) trav(grid,i+1,j)
    }
    if (j+1 < grid[0].length){
        if (grid[i][j+1] == 1) trav(grid,i,j+1)
    }
    if (i-1 >= 0){
        if (grid[i-1][j] == 1) trav(grid,i-1,j)
    }
    if (j-1 >= 0){
        if (grid[i][j-1] == 1) trav(grid,i,j-1)
    }

    return null 
}