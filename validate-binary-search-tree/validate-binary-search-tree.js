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
    
    let stack = []; //4, 3
    let prev = null; //5
    
    while (root || stack.length) { //4
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        
        let node = stack.pop(); //3
        if (prev && node.val <= prev.val) return false;
        prev = node;
        root = node.right;
    }
    
    return true;
};