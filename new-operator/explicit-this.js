var thisRef;

function Person(name, profession) {
    this.name = name;
    this.profession = profession;

    // no primitive value return
    // this ignored in this case

    // return {
    //     name: "sr",
    // }

    // primitve value return
    // in this case 'this' will returned
    thisRef = this;

    return "Shubham";
}

const sr = new Person("Shubham", "SDE");
console.log(sr);
console.log(sr === thisRef);
