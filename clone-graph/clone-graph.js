/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// 1 - 2
// |   |
// 4 - 3
var cloneGraph = function(node) {
    if (!node) return null;
    
    const map = new Map();
    const stack = [node]; 
    
    map.set(node, new Node(node.val));
    
    while(stack.length){
        const node = stack.pop(); 
        
        node.neighbors.forEach(neighbor => {
            if(!map.has(neighbor)){
                map.set(neighbor, new Node(neighbor.val));
                stack.push(neighbor);
            }
            
            map.get(node).neighbors.push(map.get(neighbor))
        })
    }
    
    return map.get(node);
};
