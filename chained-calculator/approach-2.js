
function cal(initialVal) {
  // 1. create accumulator - store result
  // 2. define add, sub, and val result
  // 3. return an object with add sub and val functions

  var accumulator = initialVal;
  var calObj = {}

  calObj.add = function add(num) {
    accumulator += num;
    return calObj;
  };

  calObj.sub = function sub(num) {
    accumulator -= num;
    return calObj;
  };

  calObj.val = function val() {
    return accumulator;
  };

  return calObj;
}

var result = cal(2).add(5).sub(4).val();

console.log("Result is : ", result);
