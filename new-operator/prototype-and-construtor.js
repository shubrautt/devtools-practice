function Person(name, profession) {
    this.name = name;
    this.profession = profession;
}

Person.prototype.sayName = function() {
    console.log(this.name);
}

const sr = new Person("Shubham", "SDE");
console.log(sr);
sr.sayName();

console.log(Object.getPrototypeOf(sr) === Person.prototype);
