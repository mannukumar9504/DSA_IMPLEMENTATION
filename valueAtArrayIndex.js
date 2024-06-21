const array = [1,2,3,4,5,6,7];

const setItemAtIndex = (index, value) => {
  let n = array.length -1;
  for(let i = n; i >= index; i--) {
    if(i === index) {
      array[i+1] = array[i];
      array[index] = value;
    }
    else 
      array[i+1] = array[i];
  }
  return array;
}

console.log("result===>", setItemAtIndex(4, 10));
