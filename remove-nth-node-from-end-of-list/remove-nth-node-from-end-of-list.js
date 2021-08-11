/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head;
    let copyCurr = curr;
    let headCopyCurr = copyCurr;
    let size = 0;
    
    while (curr) {
        size++;
        curr = curr.next;
    }

    let currCount = 0;
    const targetPosition = size - n;
    
    while (copyCurr) {
        if (targetPosition === 0) {
            return copyCurr.next;
        }
        
        currCount++;
        
        if (currCount === targetPosition) {
            copyCurr.next = copyCurr.next.next;
            return headCopyCurr;
        } else {
            copyCurr = copyCurr.next;
        }
    }
};