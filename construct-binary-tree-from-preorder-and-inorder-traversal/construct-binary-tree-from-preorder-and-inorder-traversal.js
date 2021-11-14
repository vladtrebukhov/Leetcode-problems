/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
   //preorder -> (nlr) [3,9,20,15,7] -> first value is root
   //inorder -> (lnr) [9,3,15,20,7] -> ordered from left to right
   //Anything to left of current root is left node, anything to right is right node

    //[3,9,20,15,7]
    //[9,3,15,20,7] 

    if (!preorder.length || !inorder.length) return null;
    
    let head = new TreeNode(preorder[0]);
    let indexOfHead = inorder.indexOf(preorder[0]);
    
    head.left = buildTree(preorder.slice(1, indexOfHead + 1), inorder.slice(0, indexOfHead));
    head.right = buildTree(preorder.slice(indexOfHead + 1, preorder.length), inorder.slice(indexOfHead + 1, inorder.length));
    
    return head;
};