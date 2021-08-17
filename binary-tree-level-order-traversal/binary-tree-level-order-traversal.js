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
var levelOrder = function(root) {
    if (!root) return [];
    
    let queue = [root]; //9, 20
    let result = [];
    
    while (queue.length) {
        let len = queue.length;
        let level_nodes = [];
        
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            
            if (node.left) {
                queue.push(node.left);
            }
            
            if (node.right) {
                queue.push(node.right);
            }
            
            level_nodes.push(node.val);
        }
        result.push(level_nodes);
    }
    
    return result;
};