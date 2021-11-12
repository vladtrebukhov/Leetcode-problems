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
   if (!root) return;
    
   let stack = [];
   let prev = null; 
    
    //Can do pre, in, post -order traversals
    //In order is what we want, because it would be sorted smallest to largest left -> right
    //When we pop off node, set this as a previous node so next iterations we can compare previous against current node values
    
    
  while (root || stack.length) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      
      let node = stack.pop();
      if (prev && prev.val >= node.val) return false;
      prev = node;
      root = node.right;
  };
    
  return true;
}
