/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultList = new ListNode(null, null); 
    let headResultList = resultList;
    let carry = 0

    while (l1 && l2) {
        let curr = l1.val + l2.val + carry;
        carry = curr >= 10 ? 1 : 0;
        
        if (carry) {
            let nodeVal = parseInt(curr.toString().split('')[1]);   
            resultList.next = new ListNode(nodeVal, null);
        } else {
            resultList.next = new ListNode(curr, null);
        }
        
        resultList = resultList.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
    if (l1 && !l2 && !carry) {
        resultList.next = l1;
    }
    
    if (!l1 && l2 && !carry) {
        resultList.next = l2;
    }
    
    if (carry) {
        let remainingList = l1 ? l1 : l2;
        
        while (remainingList && carry) {
            let curr = remainingList.val + carry; //10
            let nodeVal;
            
            carry = curr >= 10 ? 1 : 0;
            
            if (!carry) {
                resultList.next = new ListNode(curr, null);
                resultList = resultList.next;
                remainingList = remainingList.next;
                break;
            }
            
            nodeVal = parseInt(curr.toString().split('')[1]);   
            resultList.next = new ListNode(nodeVal, null);
            remainingList = remainingList.next;
            resultList = resultList.next;
        } 
        
        if (remainingList) {
            resultList.next = remainingList;
        }
        
        if (carry) {
            resultList.next = new ListNode(carry, null);
        }
    }
    
    return headResultList.next
};