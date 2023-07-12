class Node {
    constructor(value) {
        this.key = value;
        this.left = this.right = null;
    }
}

const initializationOfTree = () => {
    const root = new Node(10);
    root.left = new Node(20);
    root.right = new Node(30);
    root.right.left = new Node(40);
    root.right.right = new Node(60);
    root.right.left.left = new Node(50);
    root.right.right.right = new Node(70);
    return diameter(root);
}

const heightOfTree = (root) => {
    if(root === null) return 0;
    else return (1 + Math.max(heightOfTree(root.left),heightOfTree(root.right)));
}

const diameter = (root) => {
    if(root === null) return 0;
    let d1 = 1 + heightOfTree(root.left) + heightOfTree(root.right);
    let d2 = diameter(root.left);
    let d3 = diameter(root.right);
    return Math.max(d1,Math.max(d2,d3));
}
console.log("====>",initializationOfTree());