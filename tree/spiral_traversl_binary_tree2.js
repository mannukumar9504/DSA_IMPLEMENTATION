/**
 * traversing a binary tree in zig-zag or spiral format
 * input value = 5,10,15,20,22,25,30
 * output = 5,15,10,20,22,25,30
 * Method1- on stack basis
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
    const root = new Node(5);
    root.left = new Node(10);
    root.right = new Node(15);
    root.left.left = new Node(20);
    root.left.right = new Node(22);
    root.right.left = new Node(25);
    root.right.right = new Node (30);
    return printSpiralTraversal(root);

}

const printSpiralTraversal = (root) => {
    if(root === null) return;
    let queue = [];
    let stack = [];
    let reverse = false;
    queue.push(root);
    while(queue.length > 0) {
        let count = queue.length;
        for(let i = 0; i < count; i++) {
            let curr  = queue.shift();
            if(reverse) {
                stack.push(curr.key);
            } else {
                console.log(curr.key+" ");
            }
            if(curr.left !=null) {
                queue.push(curr.left);
            }
            if(curr.right != null) {
                queue.push(curr.right);
            }

        }
        if(reverse) {
            while(stack.length > 0) {
                console.log(stack.pop()+" ");
            }
        }
        reverse = !reverse;
    }
}

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

console.log(initializeBinaryTree());