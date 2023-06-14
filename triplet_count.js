//class Solution {
    
   const countTriplet = (arr,n) => {
        arr.sort(sortNumbers);
        let count = 0;
        for(let i = n - 1; i > 0; i--) {
            let startPointer = 0;
            let endPointer = i - 1;
            while(startPointer < endPointer) {
                let sum = arr[startPointer] + arr[endPointer];
                if(sum == arr[i]) {
                    count++;
                    startPointer++;
                    endPointer--;
                }
                if(sum > arr[i])
                endPointer--;
                if(sum < arr[i])
                startPointer++;
            }
        }
        return count;
}
function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
let array = [12, 8, 2, 11, 5, 14, 10];
let n = array.length;
console.log("==>",countTriplet(array, n));