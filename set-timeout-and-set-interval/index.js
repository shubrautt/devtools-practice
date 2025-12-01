setTimeout('console.log("hello")', 0);
// behide the its uses to eval as the provided argument is in string - not recommanded

function greet(name) {
    console.log("hello " + name);
}

// args => (cb, time, args);
// let id = setTimeout(greet, 0, "shubham");
// returns timerid 

// we can clear the timeout if we want to - using clearTimeout(id)
clearTimeout(id);

let id = setInterval(greet, 0, "shubham");

clearInterval(id);
