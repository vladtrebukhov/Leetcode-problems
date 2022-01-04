/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    //Turn tree into graph
    //BFS until K level and return it
    //{3:[null, 5, 1], 5:[3,6,2], 1:[3,0,8], 6:[5,null,null], 2:[5,7,4]...}

    if (k === 0) return [target.val];
    
    let graph = {};
  
    const treeToGraph = (node, parent) => {
        if (!node) return;
        
        graph[node.val] = [
            parent ? parent.val : null,
            node.left ? node.left.val : null,
            node.right ? node.right.val : null
        ]
        
        treeToGraph(node.left, node);
        treeToGraph(node.right, node);
    }
    
    treeToGraph(root, null);
    
    let count = 1;
    let visited = [target.val]; 
    let queue = [graph[target.val]]
    let result = [];
    
    while (queue.length) {
        let nodes = queue.shift();
        let edges = [];

        if (count === k) {
            console.log(nodes)
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i] !== undefined && nodes[i] !== null) {
                    result.push(nodes[i]);
                }
            }
            
            return result;
        }
        
        for (let i = 0; i < nodes.length; i++) {
            edges.push(graph[nodes[i]]);
            visited.push(nodes[i]);
        }
        
        edges = edges.flat().filter(val => !visited.includes(val) && val !== null);
        queue.push(edges);
        count++;
    }
};