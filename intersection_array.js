/**
 * Optimized solution
 * complexity for this program would be O(n+m);
 * space comeplexity for worst case us O(1); 
 * @returns 
 */


const intersectionElement = (array1, array2) => {
    let result = [];
    let memo = {};
    for(let i = 0; i<array1.length; i++) {
        if(memo[array1[i]])
        memo[array1[i]] +=1;
        else 
        memo[array1[i]] = 1;
    }
    for(let i=0; i< array2.length; i++) {
        if(memo[array2[i]]) {
            result.push(array2[i]);
            memo[array2[i]] -=1;
        }
        if(memo[array2[i]] === 0)
        delete memo[array2[i]];

    }
    return result;

}
let array1 = [10,20,30,40,50];
let array2 = [5,10,20,13,14];
console.log("insected value===>",intersectionElement(array1, array2));