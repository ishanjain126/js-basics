// PROMISE objects are Immutable
// WHAT IS A PROMISE?
// A promise is an object represeting an eventual completion of an async operation

// WITH CALLBACKS we have following issues:
// 1. Inversion of control
// 2. Callback hell --- Multiple callbacks attached to the completion of the function
// 2a. All the functions are dependent on one another
// 2b. This is also known as Pyramid of doom
// 3. Promise comes with an important feature known as Promise chain

// CONSUMING A PROMISE
const GITHUB_API = "https://api.github.com/users/ishan126";

// debugger;
const user = fetch(GITHUB_API);

/*
console.log(user);  // This is returning pending, but it is into the Fulfilled state now (once you expand the state)
*/

// user.then(function (...args) {
//   console.log(...args, typeof args);
// });

// CREATING A PROMISE
const cart = ["shoes", "pants", "jeans", "cargos"];

const promise = createOrder(cart); // Returns the order id

promise.then(function () {
  proceedToPayment(orderId);
});

// PROMISE PRODUCER

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // Logic to create an order
    // Validate Cart
    // order id -- that will be given on the success of the order

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // Logic to createOrder
  });

  return pr;
}
