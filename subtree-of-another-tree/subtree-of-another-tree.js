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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
   const isSame = (tree1, tree2) => {
        if (!tree1 && !tree2) return true;

        if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;

        return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
    }
    
    if (!root) return false;
    
    if (isSame(root, subRoot)) {
       return true;
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot); 
};
