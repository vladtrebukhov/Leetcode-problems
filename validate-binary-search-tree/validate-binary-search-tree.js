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
    let stack = [];
    let prev = null;
    
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        let node = stack.pop();
        if (prev && prev.val >= node.val) return false;
        prev = node;
        root = node.right;
    }
    
    return true;
};