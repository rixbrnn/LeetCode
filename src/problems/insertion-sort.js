
 //Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    
    let sortedNodesHead = new ListNode(head.val, null);
    
    
    let unsortedNodesHead = head.next;
    
    while(unsortedNodesHead){
        
        let currentSortedNode = sortedNodesHead;
        let previousSortedNode = null;
        
        let inserted = false;
        
        while(!inserted){
            const nextUnsortedNode = unsortedNodesHead.next;
            
            // Unsorted nodes head is smaller than the sorted nodes head
            if(unsortedNodesHead.val < currentSortedNode.val){
                
                // Change pointers
                unsortedNodesHead.next = currentSortedNode;
                currentSortedNode = unsortedNodesHead;
                
                if(previousSortedNode){
                    previousSortedNode.next = currentSortedNode;
                }else{
                    sortedNodesHead = unsortedNodesHead;
                }
                
                unsortedNodesHead = nextUnsortedNode;
                inserted = true;
                
            // There is no next current sorted node
            }else if(!currentSortedNode.next){
                currentSortedNode.next = unsortedNodesHead;
                unsortedNodesHead.next = null;
                unsortedNodesHead = unsortedNodesHead.next;
                inserted = true;
            }
            
            // Need to check next position of the sorted nodes
            else{
                previousSortedNode = currentSortedNode;
                currentSortedNode = currentSortedNode.next
            }
        }
        
    }
    return sortedNodesHead;
    
};

insertionSortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3)))));