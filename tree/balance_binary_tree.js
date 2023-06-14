class Node {
    key;
    left;
    right;
    constructor(value) {
        this.key = value;
        this.left = this.right = null;
    }

}
const initializeBinaryTree = () => {
    const root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(7);
    root.right.left = new Node(15);
    root.right.right = new Node(16);
    if(isBalanced(root) > 0) console.log("Balanced");
    else console.log("Not balanced");
}

const isBalanced  = (root) => {
    console.log("root==>",root);
    if(root === null) {
        return 0;
    }
    let lh = isBalanced(root.left);
    console.log("lh==>",lh);
    if(lh == -1) {
        return -1;
    }
    let rh =isBalanced(root.right);
    console.log("rh===>",rh);
    if(rh == -1) {
        return -1;
    }
    if(Math.abs(lh-rh) > 1) return -1;
    else return Math.max(lh,rh)+1
}
initializeBinaryTree();