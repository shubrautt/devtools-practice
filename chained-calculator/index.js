/**
 * For more programming concepts, questions, tips, and tutorials, visit:
 *
 * https://bit.ly/devtools-yt
 * https://code.devtools.tech
 * https://devtools.tech
 *
 * Author: Puneet Ahuja (https://puneetahuja.in)
 */

/**
  * Question: Create a function calculator that should take one initial value.
  * Chain calculations like add, subtract on it.
  * Return the calculated value on invocation of val function at the end of the chain.
  * 
    var result = cal(2)
            .add(5)
            .sub(4)
            .val()

    console.log("Result is : " , result)

    // Output : 3 (2 + 5 - 4)
  */

/**
 * **********  Approach - 1  **********
 */

function cal(initialVal) {
  // 1. create accumulator - store result
  // 2. define add, sub, and val result
  // 3. return an object with add sub and val functions

  var accumulator = initialVal;

  this.add = function add(num) {
    accumulator += num;
    return this;
  };

  this.sub = function sub(num) {
    accumulator -= num;
    return this;
  };

  this.val = function val() {
    return accumulator;
  };

  return this;
}

var result = cal(2).add(5).sub(4).val();

console.log("Result is : ", result);
