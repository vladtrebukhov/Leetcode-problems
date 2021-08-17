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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) return true;
    
    let stack = []; //2
    let pre = null;
    
    while ( root !== null || stack.length > 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop();
        
        if (pre !== null && root.val <= pre.val) return false;
        pre = root;
        root = root.right;
    }
    
    return true;
};