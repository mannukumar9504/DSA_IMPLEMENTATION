function merge(arr1, m, arr2, n)
{
    // Iterate through all elements of ar2[] starting from
    // the last element
    for (let i = n-1; i >= 0; i--)
    {
        /* Find the smallest element greater than ar2[i]. Move all
           elements one position ahead till the smallest greater
           element is not found */
        let j, last = arr1[m-1];
        for (j = m-2; j >= 0 && arr1[j] > arr2[i]; j--) {
            arr1[j+1] = arr1[j];
        }
  
        // If there was a greater element
        if (last > arr2[i])
        {
            arr1[j+1] = arr2[i];
            arr2[i] = last;
        }
    }
    return arr1 +'\n '+arr2;
}
let arr1 = [1, 5, 9, 10, 15, 20];
let m = arr1.length;
let arr2 = [2, 3, 8, 13];
let n = arr2.length;
console.log("result = " , merge(arr1, m, arr2, n));
