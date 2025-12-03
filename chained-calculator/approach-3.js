
function cal(initialVal) {
  // 1. create accumulator - store result
  // 2. define add, sub, and val result
  // 3. return an object with add sub and val functions

  var calObj = {
    add,
    sub,
    val
  }

  function add(num) {
    return cal(initialVal + num);
  };

  function sub(num) {
    return cal(initialVal - num);
  };

  function val() {
    return initialVal;
  };

  return calObj;
}

var result = cal(2).add(5).sub(4).val();

console.log("Result is : ", result);
