/***
Linked List Cycles
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null
A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D
'Constraint 1: Do this in linear time'

'Constraint 2: Do this in constant space'

'Constraint 3: Do not mutate the original nodes in any way'
***/

const hasCycle = linkedList => {
  let slow = linkedList;
  let fast = linkedList;
  let pause = true;

  while(fast) {
    fast = fast.next;
    if(!pause) {
      slow = slow.next;
    }
    pause = !pause;

    if(slow === fast) {
      return true;
    }
  }
  return false;
};