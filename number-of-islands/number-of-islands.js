/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid) return 0;
    
    let num_islands = 0;
    
    const bfs = (grid, i, j) => {
        if (i < 0 || i === grid.length || j < 0 || j === grid[i].length || grid[i][j] === '0') {
            return;
        }
        
        grid[i][j] = '0';
        
        bfs(grid, i + 1, j);
        bfs(grid, i - 1, j);
        bfs(grid, i, j + 1);
        bfs(grid, i, j - 1);
        
        return 1;        
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                num_islands += bfs(grid, i, j);
            }
        }
    }
    
    return num_islands;
};