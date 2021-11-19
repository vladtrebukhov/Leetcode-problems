/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //Brute force Solution: DFS from 0, 0 -> to end checking i + 1, j + 1. 
    //If i >= m or j >= n, gone out of bounds so return. 
    //If i === m - 1 and j === n - 1, increment uniquePaths.
    //Return unique paths after all right and down cells from each cell are checked.
    //Time -> O(2^n*m) (too slow), Space -> O(n*m) for recursion stack
    
    //DP Solution: Calculate number of paths starting from end cell, which is 1 (itself)
    //Check i - 1, j - 1...if not out of bounds, take current cells value 
    //(which should be 0 if not visited yet) and add current to either cell at grid[i-1][j] or grid[i][j+1]
    
    //Since we're coming from two directions, up and right (in this case down and left since backwards)
    //Some cells will be visited twice, so they will add number of paths from both sides, right and down.
    //Once loop completes, we've arrived at [0,0] and have added all paths started from [0,1] and [1,0] so return grid[0][0]
    //Time -> O(n * m), Space -> O(n * m) for grid to hold all previous number of paths
    
    //Creates m * n grid to store previous number of paths from cell at each index
    let grid = [...Array(m)].map(value => [...Array(n)].fill(0));
    
    //Initially, the last cell (destination) is 1 (only one path to get to that cell, which is itself)
    grid[m-1][n-1] = 1;
    
    //Loop backwards from last cell 
    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j >=0; j--) {
            let current = grid[i][j];
            
            //Check that previous left and top cell is not out of bounds (opposite of right and down)
            //If not, add current to previous cells value (initially 0, but if we visited already it will have a value)
            if (i-1 >= 0) grid[i-1][j] += current;
            if (j-1 >= 0) grid[i][j-1] += current;
        }
    }
    
    return grid[0][0];
};
