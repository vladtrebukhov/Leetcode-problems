/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    //Since level order, do BFS with queue
    //Even: left -> right
    //Odd:  right -> left
    //Keep track of level while doing BFS, if current level even then push
    //Onto queue
    
    let level = 0; //2
    let result = []; //[3], [20,9]
    let queue = [root]; //15,7
    
    while (queue.length) {
        let len = queue.length;
        let zigZag = []; //20,9
        
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            
            if (node.left) {
                queue.push(node.left);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
            
            level % 2 === 0 ? zigZag.push(node.val) : zigZag.unshift(node.val);
        }
        
        result.push(zigZag);
        level++;
    }
        
    return result;
};