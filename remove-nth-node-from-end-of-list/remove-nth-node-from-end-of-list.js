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
    //Need to determine length of linked list
    //Knowing this, we know can set the next value of node at length - n to next.next
    //1) Loop through head, incrementing length until end
    //2) Do second pass until you reach length - n
    //3) Set node.next = node.next.next
    //4) Return head of list with removed node
    
    let list = head;
    let numberOfNodes = 0;
    
    while (list) {
        numberOfNodes++;
        list = list.next;
    }
    
    let listWithoutNode = head;
    let headListWithoutNode = listWithoutNode;
    let count = 1;
    
    if (numberOfNodes - n === 0) {
        return listWithoutNode.next;
    } 
    
    while (count < numberOfNodes - n) {
        listWithoutNode = listWithoutNode.next;
        count++;
    }
    
    listWithoutNode.next = listWithoutNode.next.next;
    
    return headListWithoutNode;
};