//closure - A function along with its lexical environment.


const init = () => {
    var name  = "hello";
    const displayName = () => { // displayName is inner function, a closure
      console.log(name); // use variable declared in the parent function.
    }
    name = "harry";
    return displayName;
  }
  
  let c  = init();
  c();