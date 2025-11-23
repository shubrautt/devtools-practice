var b = {
    a: 1,
    print: function () {
        console.log(this.a);
    }
}

// function foo() {
//     console.log(this.a);
// }

// foo.call(b);

console.log(b.print());

// arrow function resolve this lexically
// also arrow functions dont have the arguments object


function abc() {
    console.log(arguments) // arguments: {0:1, 1:2}
}

const abc = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
}

abc(1, 2);

// arrow function dont contains constructor function in prototype
