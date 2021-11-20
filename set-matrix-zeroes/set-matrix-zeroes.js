/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //Determine at which indices i and j we must make each number a zero
    let indices_i = []; //0, 0
    let indices_j = [];//0, 3
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                indices_i.push(i);
                indices_j.push(j);
            }
        }
    }
    
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] !== 0) {
                if (indices_i.indexOf(x) >= 0 || indices_j.indexOf(y) >= 0) {
                    matrix[x][y] = 0;
                } 
            }
        }
    }
    
    return matrix;
};