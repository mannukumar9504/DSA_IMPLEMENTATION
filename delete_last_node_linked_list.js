//head of list
var head = null;

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
//function to remove the last of the linked list
function removeLastNode(head) {
  if(head == null) {
    return null;
  }
  if(head.next == null) {
    return null;
  }
  //find the second last node
  var second_last_node = head;
  while(second_last_node.next.next !== null) {
    
    second_last_node =second_last_node.next;
    
  }
  second_last_node.next = null;
  return head;
}

//function to push ndoe at head
function push(head_ref, new_data) {
  var new_node = new Node();
  new_node.data = new_data;
  new_node.next = (head_ref);
  head_ref = new_node;
  return head_ref;
  
}


//Driver code
//use push fucnrion to construct
//the below list for making nodes

 head = push(head, 12);
 head = push(head, 29);
 head = push(head, 11);
 head = push(head, 23);
 head = push(head, 8);

head = removeLastNode(head);
for(temp = head; temp !== null; temp= temp.next) {
  console.log(temp.data + " ");
}