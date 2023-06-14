process.stdin.resume();
process.stdin.setEncoding("utf-8");
let test_case = [];
let n = [];
process.stdin.on("data", function (input) {
    test_case.push(input.split(' '));
  takeInput();
});
function takeInput () {
  process.stdin.on("data", function (input) {
    n.push(input.split(' '));
    process.exit();
  })
}

process.on("exit", function () {
 if(n.length > 0) {
   main(n);
 }
});
function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}