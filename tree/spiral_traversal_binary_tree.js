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
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    while(stack1.length || stack2.length) {

        while(stack1.length) {
            let temp = stack1[stack1.length - 1];
            stack1.pop();
            console.log(temp.key + " ");

            if(temp.left != null) {
                stack2.push(temp.left);
            }
            if(temp.right != null) {
                stack2.push(temp.right);
            }
        }

        while(stack2.length) {
            let temp = stack2[stack2.length - 1];
            stack2.pop();
            console.log(temp.key+ " ");

            if(temp.right != null) {
                stack1.push(temp.right);
            }

            if(temp.left != null) {
                stack1.push(temp.left);
            }
            
        }
    }
}

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

console.log(initializeBinaryTree());