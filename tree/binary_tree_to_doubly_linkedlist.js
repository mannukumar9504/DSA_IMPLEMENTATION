
class Node {
    key;
    left;
    right;
    constructor(value) {
        this.key = value;
        this.left = this.right = null;
    }
}
let prev = null;
let head = null;

const initializeBinaryTree = () => {
    const root = new Node(10);
    root.left = new Node(5);
    root.left.left = new Node(7);
    root.right = new Node(20);
    root.right.left = new Node(30);
    root.right.right = new Node(35);
    let head = BTToDLL(root);
    return printList(head);
}

const BTToDLL = (root) => {
    if (root === null) { // for most leaf node value is null.
        return root
    };
    head = BTToDLL(root.left); //process all left node.
    if (prev === null) { 

        head = root; 

    } else {
        // proccessing current node
        root.left = prev;  
        prev.right = root;

    }
    prev = root;
    BTToDLL(root.right); //process all right node.
    return head;
}
const printList = (head) => {
    let curr = head;
    while (curr != null) {
        console.log(curr.key + " ");
        curr = curr.right;
    }
}
initializeBinaryTree();