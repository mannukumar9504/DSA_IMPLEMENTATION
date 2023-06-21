/**
 * code to draw a binary tree using preOrder and inOrder traversal.
 */

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
    let inOrder = [20,10,40,30,50];
    let preOrder = [10,20,30,40,50];
    let n = inOrder.length;
    let root = cTree(inOrder, preOrder, 0,n-1)
    return inOrderfunction(root);
}


let preIndex = 0;
const cTree = (inOrder, preOrder, is, ie) => {
    if(is>ie) return null;
    let root = new Node(preOrder[preIndex++]);

    let inIndex = is;
    for(let i=is; i<=ie; i++) {
        if(inOrder[i] == root.key) {
            inIndex = i;
            break;
        }
    }
    root.left = cTree(inOrder, preOrder, is, inIndex-1);
    root.right = cTree(inOrder, preOrder, inIndex+1, ie);
    return root;
}
const inOrderfunction = (root) => {
    if(root != null){
        inOrderfunction(root.left);
        console.log(root.key++);
        inOrderfunction(root.right);
    }
}
initializeBinaryTree();
