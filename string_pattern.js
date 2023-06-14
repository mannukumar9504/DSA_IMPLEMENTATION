let input="My name is Utkarsh Panwar";
let output="yM Panwar eman Utkarsh si";



let resultArray = input.split(" "); //array of string splited by space
let result = [] // array to store proceesed result.
let n = resultArray.length-1; // length of array.
for(let i=0; i<=resultArray.length/2; i++) {
  
    result.push(resultArray[i].split("").reverse().join(""));
  if(i < n-i)
    result.push(resultArray[n-i]);
  
}
console.log(result.join(" "));