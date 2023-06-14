function getMissingNo(a, n) 
{ 
    let i, total=1; 
    
    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total; 
} 

//Driver Program
    let arr = [6,5,3,4,2];
    let N = arr.length;
    
    // Function call
    console.log(getMissingNo(arr, N));