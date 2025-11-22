function MyAwesomeLibrary(config) {
    if(!new.target) {
        // throw new Error("Call me with new operator");

        // you can also return the new instance 
        return new MyAwesomeLibrary(config);
    }

    this.there = true;
}

let ae = MyAwesomeLibrary({ data: "This is awesome library"});
console.log(ae);
