/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
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