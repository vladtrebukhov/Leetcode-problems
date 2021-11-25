/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) return null;
    
    //1->2->3->5->5->6
    //3->5
    //5->6
    //odd, even pointers
    //set odd to odd.next.next
    //set even to even.next.next
    //odd = odd.next
    //even = even.next
    //keep going until no more even or even.next
    //set tail of odd to head of even, return head
    
    let odd = head;
    let even = head.next;
    let evenHead = head.next;

    while (even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        
        odd = odd.next;
        even = even.next;
    }
    
    odd.next = evenHead;
    return head;
}