function reduce(callback, initialValue) {
    if(this === null || this === undefined) {
        throw new TypeError(`Array.prototype.reduce called on null or undefined`);
    }

    if(!callback || typeof callback != "function") {
        throw new TypeError(`${callback} is not a function`);
    }

    if(!this.length) {
        if(arguments.length < 2) {
            throw new TypeError(`Reduce on empty array with no initial value`);
        } else if(arguments.length === 2) {
            return initialValue;
        }
    }

    var currentIndex = 0;
    var acc = initialValue;

    if(arguments.length < 2) {
        acc = this[currentIndex];
        currentIndex++;
    }

    while(currentIndex < this.length) {
        if(Object.prototype.hasOwnProperty.call(this, currentIndex)) {
            acc = callback(acc, this[currentIndex], currentIndex, this);
        }
        currentIndex++;
    }

    return acc;
}

Array.prototype.customReduce = reduce;

let a = [1, 2, 3];

function sum(acc, currentVal, currentIndex, arr) {
    console.log(acc, currentVal, currentIndex, arr);
    return acc + currentVal;
}

console.log(a.customReduce(sum));
