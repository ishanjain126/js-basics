// DEFINITION
/*
Prototypes are the mechanism by which JS objects inherits features from one 
another. Every JavaScript object has a prototype. The prototype is also an object.
Instead of creating classes and then creating objects out of those classes, 
in JavaScript, we create objects directly 
and then link them to a prototype object to inherit properties and methods.
*/

//  HOW PROTOTYPE WORKS
/*
  When you try to access a property or method of an object, JavaScript first 
  checks if the object itself contains that property/method.
  If the object does not contain the property/method, JavaScript checks 
  the object's prototype, and then the prototype's prototype, and so on, up the 
  chain until it either finds the property/method or reaches the end of the prototype
  chain (which would be null).
  This chain of prototypes is known as the "prototype chain."
*/

// Array.prototype.returnSquare = function () {
//   return this.map((i) => i * i);
// };

// function calculateSquare(arr) {
//   return arr.returnSquare();
// }

// const numbers = [2, 3, 4, 5, 6];
// const squares = calculateSquare(numbers);
// console.log(squares);

// Difference between the prototype vs __proto__

// THIS IS VERY IMPORTANT PIECE OF CODE IN ORDER TO UNDERSTAND THE PROTOTYPE --- Uncomment as and when required

/*
function Parent(name, age) {
  this.name = name;
  this.age = age;
  this.greetingMessage = function () {
    return `Hello ${this.name}. Good to see, that you have turned ${this.age}. 
    Please choose the activity keep your age group in mind.`;
  };
}

Parent.prototype.greetingMessagePrototype = function () {
  return `Hello ${this.name}. Good to see, that you have turned ${this.age}. 
  Please choose the activity keep your age group in mind. This is defining the prototype behaviour. `;
};

function Child(name, age) {
  Parent.call(this, name, age);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const childInstance = new Child("Ishan", 25);

console.log(childInstance.greetingMessage());
console.log(childInstance.greetingMessagePrototype());
*/

// ABOVE CODE EXPLANATION

/*
Object.create(Parent.prototype);:

This line sets up inheritance by making Child inherit from Parent.
 Specifically, it sets the prototype of Child instances to be an object that 
 has Parent.prototype as its prototype. This ensures that methods and properties on 
 Parent.prototype are available to instances of Child.

Object.create(Parent.prototype) creates a new object that has 
Parent.prototype as its prototype. This new object does not have any of the instance 
properties of a Parent object; it only sets up the prototype chain.

Child.prototype.constructor = Child;:

After the previous line, the constructor property of Child.prototype actually 
points to Parent because we've essentially overwritten Child.prototype with a new 
object whose prototype is Parent.prototype. This line corrects that by setting the 
constructor property of Child.prototype back to Child.

This is essential for keeping the integrity of the prototype chain and 
ensuring that if you were to inspect the constructor property of an instance of Child, 
it would correctly point to Child and not Parent.

*/

// IMPORTANCE OF ASSIGNING A FUNCTION TO PROTOTYPE INSTEAD OF DIRECTLY INTO THE FUNCTION
/*
    1. It basically boils down to the memory usage and the nature of inheritance into JS
    2. Whenever a function is defined into the constructor function, a new function is instantiated for every 
    object instantiated by the constructor
    3. Whenever a method is defined on the prototype all objects instantiated by the constructor shares the same 
    single instance of the object
*/

// Using this understand the use and the importance of prototype and __proto__
// Using Array.prototype.map effectively changes the map function for the entire environment
// While at the same time, __proto__ refers to the manipulation of the exisiting object prototype change
// REFER TO THE CHAT-GPTs Replicate design in Photoshop in order to read more about it.

Array.prototype.map = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] * this[i]);
  }
  return arr;
};

const testArr = [2, 3, 4, 5];
console.log(testArr.map());

const newArr = testArr.map((i) => i);
console.log(newArr);
