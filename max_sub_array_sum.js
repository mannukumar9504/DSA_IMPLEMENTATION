class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N) {
        let maxSum = arr[0];
        let max_till_now = arr[0] < 0 ? 0 : arr[0];
        for (let i = 1; i < N; i++) {
            maxSum = Math.max(maxSum, arr[i] + max_till_now);
            max_till_now += arr[i];
            if (max_till_now < 0)
                max_till_now = 0;
        }
        return maxSum;
    }
}

const obj = new Solution;
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = array.length;
console.log(obj.maxSubarraySum(array, n));