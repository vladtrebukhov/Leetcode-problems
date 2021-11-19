/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //Creates m * n grid to store previous number of paths from cell at each index
    let grid = [...Array(m)].map(value => [...Array(n)].fill(0));
    grid[m-1][n-1] = 1;
    
    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j >=0; j--) {
            let current = grid[i][j];
            
            if (i-1 >= 0) grid[i-1][j] += current;
            if (j-1 >= 0) grid[i][j-1] += current;
        }
    }
    
    return grid[0][0];
};