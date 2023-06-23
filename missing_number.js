function getMissingNo(a, n) 
{ 
    let i, total=1; 
    
    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        console.log("before total==>",total);
        total -= a[i-2];
        console.log("after total===>",total);
    }
    return total; 
} 

//Driver Program
    let arr = [6,5,3,4,2];
    let N = arr.length;
    
    // Function call
    console.log(getMissingNo(arr, N));


    // 3 -3
    // 0 -5
    // -1 -4
    // 1 -3
    // 3 1
