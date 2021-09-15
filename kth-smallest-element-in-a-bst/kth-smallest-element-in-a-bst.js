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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) return null;
    
    let stack = []; 
    let ordered_arr = []; 
    
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        let node = stack.pop();
        
        ordered_arr.push(node.val);
        
        root = node.right;
    }
    
    return ordered_arr[k - 1]
};