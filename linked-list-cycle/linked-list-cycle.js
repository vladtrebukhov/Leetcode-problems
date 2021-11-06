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

var hasCycle = function(head) { 
    if (!head) return false
    
    //set slow = slow.next, fast = fast.next.next -> compare if equal. If yes, cycle exists
    
    let slow = head; //2->0->4
    let fast = head.next;
    
    while (fast && fast.next) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
};