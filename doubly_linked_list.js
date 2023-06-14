class Node {
    constructor (d) {
       this.data = d;
        this.prev = null;
        this.next = null;
    };
}
function printlist(head){
    let curr=head;
    while(curr!=null){
        console.log(curr.data+" ");
        curr=curr.next;
    }
}
let node = new Node();
let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);
    head.next = temp1;
    temp1.prev = head;
    temp1.next = temp2;
    temp2.prev = temp1;
   // printlist(head);

const insertNode = (head, value, position) => {
 let temp = {};
 if(position === 1){
    temp.next = head;
    temp.data = value;
    temp.prev = null;
 }
 head.prev = temp;
 return temp;
}
const insertNodeEnd  = (head, value) => {
 let temp = new Node(value);
  if(head === null) 
  return temp;
   let curr = head;
   while(curr.next !== null) {
    curr = curr.next;
   }
   curr.next = temp;
   temp.prev = curr;
   return head;
}
head = insertNodeEnd(head, 5);
console.log(head.next.next.next);