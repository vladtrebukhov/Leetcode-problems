/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//head = [3,2,0,-4], pos = 1
var hasCycle = function(head) { 
    if (!head) return false
    
    let slow = head;
    let fast = head.next;
    
    while (slow) {
        if (slow === fast) {
            return true;
        }
        
        if (!fast || !fast.next) {
            return false;
        }
        
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
};