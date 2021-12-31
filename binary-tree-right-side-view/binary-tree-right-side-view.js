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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    
    let result = [];
    let queue = [root]; //2,3
    
    while (queue.length) {
        let len = queue.length;
        
        for (let i = 0; i < len; i++) {
            let node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
            
            if (i === len - 1) result.push(node.val);
        }      
    }
    
    return result;
};