/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newListHead;

    if(!list1){
        return list2;
    }

    if(!list2){
        return list1;
    }

    if(list1.val <= list2.val){
        newListHead = list1;
        list1 = list1.next;
    }else{
        newListHead = list2;
        list2 = list2.next;
    }

    let newList = newListHead;
    while(list1 || list2){
        if(list1 && !list2){
            newList.next = list2;
            list1 = list1.next;
        }else if(!list1 && list2) {
            newList.next = list2;
            list2 = list2.next;
        }
        else if(list1.val <= list2.val){
            newList.next = list1;
            list1 = list1.next;
        }else{
            newList.next = list2;
            list2 = list2.next;
        }

        if(newList.next){
            newList = newList.next;
        }

    }
    return newListHead;
};

// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Helper to build a linked list from an array
function buildList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

mergeTwoLists(buildList([2]), buildList([1]));