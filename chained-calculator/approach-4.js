class Calculator {
    constructor(initialVal) {
        this.accumulator = initialVal;
    }

    add(num) {
        this.accumulator += num;
        return this;
    }

    sub(num) {
        this.accumulator -= num;
        return this;
    }

    val() {
        return this.accumulator;
    }
}

function cal(initialVal) {
    return new Calculator(initialVal);
}

var result = cal(2).add(5).sub(4).val();

console.log("Result is : ", result);
