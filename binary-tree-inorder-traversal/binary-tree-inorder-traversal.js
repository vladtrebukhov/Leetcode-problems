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
var inorderTraversal = function(root) {
   //left node right
    
   let stack = [];
   let result = []; //7, 4, 10, 5, 6
    
   if (!root) return result;
    
    while (root || stack.length > 0) { 
        while (root) {
            stack.push(root);
            root = root.left;
        }
        
        let node = stack.pop();  
        result.push(node.val);
        root = node.right; 
    }
    
    return result;
 };