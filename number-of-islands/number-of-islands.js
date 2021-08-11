/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
   if (!grid || grid.length === '0') return 0;
    
    let num_islands = 0;
    
    const sinkIslands = (grid, i, j) => {
        if (i < 0 || i === grid.length || j < 0 || j === grid[i].length || grid[i][j] === '0') {
            return;
        }
        
        grid[i][j] = '0';
        
        sinkIslands(grid, i + 1, j);
        sinkIslands(grid, i - 1, j);
        sinkIslands(grid, i, j - 1);
        sinkIslands(grid, i, j + 1);
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                num_islands++;
                sinkIslands(grid, i, j);
            }
        }
    }
    
    return num_islands;
};