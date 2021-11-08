/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numberOfIslands = 0;
    
    const dfs = (i, j, grid) => {
        if (i >= grid.length || i < 0 || j >= grid[i].length || j < 0 || grid[i][j] === '0') {
            return;
        }
            
        if (grid[i][j] === '1') {
            grid[i][j] = '0';
        }
        
        dfs(i - 1, j, grid);
        dfs(i + 1, j, grid);
        dfs(i, j - 1, grid);
        dfs(i, j + 1, grid);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numberOfIslands++;
                dfs(i, j, grid);
            }
        }
    }
    
    return numberOfIslands;
};