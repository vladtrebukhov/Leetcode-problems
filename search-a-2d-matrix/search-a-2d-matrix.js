/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let y = 0;
    let x = matrix[0].length - 1;
    
    while (x >= 0 && y <= matrix.length - 1) {
        let currVal = matrix[y][x];
        
        if (currVal === target) {
            return true;
        } else if (target < currVal) {
            x--;
        } else {
            y++;
        }
    }
    return false;
};