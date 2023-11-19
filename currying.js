// It represents both cuyrrying and closures

function outer() {
  let argumentsArr = [];
  function accumulateArgs() {
    argumentsArr = argumentsArr.concat([...arguments]);
    return accumulateArgs;
  }

  accumulateArgs.end = function () {
    let res = 0;
    argumentsArr.forEach((items) => (res += items));
    return res;
  };

  return accumulateArgs;
}

const curryingTest = outer();

console.log(curryingTest(1, 2, 3)(2, 3, 4)(3, 4, 5).end());
