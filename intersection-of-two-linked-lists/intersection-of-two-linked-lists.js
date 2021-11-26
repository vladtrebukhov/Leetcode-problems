/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    //Walk through each list determining length of each one
    //If different lengths, walk through longer list first until long length - short length is found
    //At this point we can continue from the longer and start from the short
    //Check at any point if longer.next and shorter.next are equal and NOT null
    //If we come to end of lists, return not found
    
    if (headA === headB) return headA;
    
    let copyHeadA = headA;
    let copyHeadB = headB;
    let nodeCountA = 0;
    let nodeCountB = 0;
    
    while (copyHeadA) {
        nodeCountA++;
        copyHeadA = copyHeadA.next;
    }
    
    while (copyHeadB) {
        nodeCountB++;
        copyHeadB = copyHeadB.next;
    }
    
    let longer = nodeCountA >= nodeCountB ? headA : headB;
    let shorter = nodeCountA < nodeCountB ? headA : headB;
    
    let count = 0; 
    let difference = Math.abs(nodeCountA - nodeCountB); 
    
    while (longer && shorter) {
        if (longer.next === shorter) {
            return longer.next;
        }
        
        while (count !== difference) {
            count++; 
            longer = longer.next;
        }
        
        if (longer === shorter) return longer;
        
        if (longer.next === shorter.next) {
            if (longer.next && shorter.next) {
                  return longer.next;
            }
        }
        
        longer = longer.next;
        shorter = shorter.next;  
    }
    
    return null;
    
};