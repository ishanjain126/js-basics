// IMPROTANCE OF CONSTRUCTOR FUNCTIONS IN JS
/*
    1. Constructor functions allow you to create and initialize objects.
     When invoked using the new keyword, a constructor function creates a new object, 
     sets the prototype of the new object to the constructor's prototype, and then executes 
     the constructor's code within the context of the new object.
     2. Instead of defining objects manually every time, constructor functions 
     allow you to define a "blueprint" for creating objects. 
     3. Constructor functions provide a way to encapsulate the initialization logic and internal state for an object, 
     hiding the complexity of creation and setup from the rest of the code.
     4. Constructor functions, when used with their prototype property, enable the powerful 
     feature of prototypal inheritance in JavaScript. By setting up the prototype chain, 
     objects created from a constructor can inherit properties and methods from another object.
*/

// It is used to build the scalable code

// Eg:1 In this example we will be using the
// concept of closures in order to use the constructor function

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

// In order to call the constructor function
// We need to initialise it with new keyword

var counter1 = new Counter();
counter1.incrementCounter(); // 1
counter1.incrementCounter(); // 2
counter1.incrementCounter(); // 3
counter1.incrementCounter(); // 4
counter1.incrementCounter(); // 5
counter1.incrementCounter(); // 6
counter1.incrementCounter(); // 7
counter1.decrementCounter(); // 6
