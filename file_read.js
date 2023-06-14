const fs = require('fs');
setTimeout(()=>console.log('setTimeout out'));
setImmediate(()=>console.log("setImmediate out"));

fs.readFile('./add_subarray_sum.js',() => {
    console.log('fs');
    process.nextTick(()=>{
        console.log("next");
    });
    setTimeout(()=>{
        console.log("setTimeout in");
    });
    setImmediate(()=>{
        console.log("setImmediate in");
    })
})

const next = () => {
    console.log("next");
}
process.nextTick(next);