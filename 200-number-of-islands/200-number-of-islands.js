/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numIslands = 0;
    
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
            return;
        }
        
        grid[i][j] = '0';
        
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numIslands++;
                dfs(i, j)
            }
        }
    }
    
    return numIslands;
};