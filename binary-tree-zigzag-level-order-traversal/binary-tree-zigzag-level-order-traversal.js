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
    
    let queue = [root];
    let result = [];
    let level = 0; 
    
    while (queue.length) {
        let len = queue.length;
        let levelOrder = [];
        
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            
            if (node.left) {
                queue.push(node.left);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
            
            levelOrder.push(node.val);
        }
        
        levelOrder = level % 2 !== 0 ? levelOrder.reverse() : levelOrder;
        
        level++;
        result.push(levelOrder);
    }
    
    return result; 
};