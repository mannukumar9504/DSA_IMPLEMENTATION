const linkedList = {
    data: 5,
    next: {data: 6, next: {
        data: 8, next: {data: 20, next: null}
    }
}
};

let head = linkedList;
let findingValue = 20;
const searchData = (head, findingValue) => {
 let position = 1;
 let curr = head;
 while(curr != null){
    if(curr.data === findingValue) return position;
    else {
        curr = curr.next;
        position++
    }
 }
return -1;
}
console.log(searchData(head, findingValue));