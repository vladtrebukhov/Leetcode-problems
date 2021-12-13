/**
 * @param {number[][]} grid
 * @return {number}
 */

//[
//[2,1,1]
//[0,1,1]
//[1,1,1]
//[1,0,2]
//]

var orangesRotting = function(grid) {
    if (!grid.length || grid.length === 0) return 0;
    
    let queue = []; 
    let freshCount = 0;
    
    //Count all 2's initially since rotting happens at the same time from all 2's, add to queue for BFS. Count all fresh oranges (1's). When we rot, we can decrement this value 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i,j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    
    //If we initially count no fresh oranges, then we cant count minutes since we never rot so answer is 0
    if (freshCount === 0) return 0;
    
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    let numMinutes = 0;
    
    while (queue.length) {
        numMinutes++;
        let len = queue.length;

        //At each position (rotten orange) in queue, rot 4 ways turning each fresh orange into rotten
        //If its a valid cell, push valid cell to queue
         for (let i = 0; i < len; i++) {
             //Remove rotten orange we found
             let position = queue.shift();
             
             //For each direction, verify that its a valid cell (not empty, out of bounds,rotten or empty)
             //Rot the cell and decrement freshCount since we now have rotted at this cell
             
             for (let direction of dirs) {
                let row = position[0] + direction[0];
                let col = position[1] + direction[1];
                
                //Skip if out of bounds or the orange is already rotten 
                if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 2 || grid[row][col] === 0) {
                    continue;
                }

                grid[row][col] = 2;
                 
                queue.push([row, col]);
                 
                freshCount--;
             }  
        }
    }
    
    return freshCount === 0 ? numMinutes - 1 : -1; 
};


