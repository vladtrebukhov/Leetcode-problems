/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //Trivial solution - loop through each row, perform binary search -> O(n*logn)
    
    //O(n x m) solution
    //Select top right corner, check if target > or < than current cell
    //Move index of cell accordingly until out of bounds or target found
    
    let x = matrix[0].length - 1;
    let y = 0;
    
    while (x >= 0 && y <= matrix.length - 1) {
        let currVal = matrix[y][x];
        
        if (currVal === target) {
            return true;
        } else if (target > currVal) {
            y++;
        } else {
            x--;
        }
    }
    
    return false;
    
};
