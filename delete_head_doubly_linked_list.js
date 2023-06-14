
const delele_head_doubly_linked_list = (head) => {
    if(head === null || head.next == null) return null;
    else {
        head = head.next;
        head.prev = null;
        return head;
    }
}

class Node {
    constructor (d) {
       this.data = d;
        this.prev = null;
        this.next = null;
    };
}

let node = new Node();
let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);
head.next = temp1;
    temp1.prev = head;
    temp1.next = temp2;
    temp2.prev = temp1;

console.log(delele_head_doubly_linked_list(head));