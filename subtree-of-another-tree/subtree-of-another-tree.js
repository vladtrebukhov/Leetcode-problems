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
    const isSame = (tree, subtree) => {
        if (!tree && !subtree) return true;
        
        if (!tree || !subtree || tree.val !== subtree.val) return false;
        
        return isSame(tree.left, subtree.left) && isSame(tree.right, subtree.right);
    }   
    
    if (!root) return false;
    
    if (isSame(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
 
};
