// A closure is a combination of a function along with it's lexical scope
// Each and every function has the access to its outer environment
// So even if the function is executed in some other scope it remembers its outer
// lexical environment where it was originally present in the code

// Advantages pattern
// 1. Module pattern
// 2. Memoize function
// 3. Helps in data hiding and encapsulation

// Disadvantages of closure
// 1. Lot of memory --- can lead to garbage collection
// 2. It can lead to memory leak coz of the overtime accumulation of the memory

// Basic example of closure
// function a() {
//   const printStatement = "Basics of closure";
//   function b() {
//     console.log(printStatement);
//   }
//   return { b };
// }

// a().b();

// The `increment` function returns a closure that encapsulates and remembers
// the `initial` value.
// When the inner `inc` function is called, it increments the `initial` value and logs it.
// This demonstrates how closures can maintain and manipulate the state of variables
// even after their outer function has finished executing.

const increment = function () {
  let initial = 0;
  return function inc() {
    initial += 1;
    console.log(initial);
  };
};

const performIncrement = increment();
performIncrement(); // 1
performIncrement(); // 2
performIncrement(); // 3
performIncrement(); // 4
performIncrement(); // 5

function x() {
  for (var i = 1; i < 6; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Console 1");
}

console.log("Console 2");

// x();

// Now on execution of this code, we will see 6 getting executed 5 times
// This is because, according to the closure concept a reference to the variable of the lexical parent
// is kept in the memory. Hence till the time for loop is run over, and the function x is called
// value of i became 6 and hence the console.log function in the setTimeout is referring to the
// same memory location of i which has the value of 6.

// So HOW TO FIX THIS...
// On taking a closer look you might have noticed that we are using var, and
//  hence its creating the issue
// But if we replace var with let, we will be able to get the desired result.
// As let has a block scope - it will create a copy of new i everytime,
// hence on each iteration "i" will be a new variable altogether. And each time
// setTimeout is run,
// setTimeout will have it's own copy of the "i" variable

function y() {
  for (let i = 1; i < 6; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Console 3");
}

console.log("Console 4");

// y();

// HOW TO FIX this using var
// We will be using the concept of closures only, in order to solve this issue
// Problem before was it was referring to the same memory location
// But using the below method, we are allocating a new memory for the setTimeout function
// by passing the value as the param in the function

function z() {
  for (var i = 1; i < 6; i++) {
    function returnVal(x) {
      setTimeout(function () {
        console.log(x);
      });
    }
    returnVal(i);
  }
}

// z();

// Garbage collection with closure
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}

var execute = a();
execute();

// So in the above case memory allocated to x cannot be freed.
// As function b forms a closure with the variable x, and we might utilise it overtime in our code
// Memory allocated to x cannot be made free
