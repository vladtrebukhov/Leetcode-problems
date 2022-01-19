/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let found = false;
    
    const dfs = (index, i, j) => {
        if (index == word.length) found = true;
        
        if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== word[index]) {
            return;
        }
        
        const temp = board[i][j];
        
        board[i][j] = '1';
        
        dfs(index + 1, i + 1, j);
        dfs(index + 1, i - 1, j);
        dfs(index + 1, i, j + 1);
        dfs(index + 1, i, j - 1);
        
        board[i][j] = temp;
        
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const letter = board[i][j];
            if (letter === word[0]) {
                dfs(0, i, j);
            }
        }
    }
    
    return found;
};