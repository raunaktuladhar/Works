/* Conditional execution, or control flow statements is a very important topic, 
as control flow statements are essential not only to JavaScript, 
but to programming in general. Without the ability to react and change its behavior, 
any code would always do the same thing. Of course, this is sometimes exactly what we need, 
but most of the time we need responsiveness and the ability to handle different situations in the code. */

// 'if' statement (topic)

/* The if statement is the first and simplest control flow instruction available in JavaScript. 
It has a few forms, but in its basic form, it checks a given condition, and depending on its Boolean value, 
either executes a block of code, or skips it. */

// let n = prompt("Enter a number: ");
// if(n % 2 == 0){
//     alert("It is even.");
// }

// let isUserReady = confirm("Are you ready?");
 
// if (isUserReady){
//     // console.log("User ready!");
//     // alert("User ready!");
// }

// let unitPrice = 10;
// let pieces = prompt("How many pieces do you order?", 0);
// if (pieces > 0) {
//     let total = unitPrice * pieces;
//     console.log(total);
// }
// console.log(total); // -> Uncaught ReferenceError: total is not defined

// let userAge = 23;
// let isFemale = false;
// let points = 703;
// let cartValue = 299;
// let shippingCost = 9.99;
 
// if (userAge > 21) {
//     if (cartValue >= 300 || points >= 500) {
//         shippingCost = 0;
//     }
// }
 
// console.log(shippingCost);

// 'if...else' statement (topic)

/* The if statement is very handy indeed, 
but what if we also want to execute some code when a given condition is not met? 
We could of course just use another if statement and change the condition, as shown in the example: */

// let isUserReady = confirm("Are you ready?");
 
// if (isUserReady) {
//     console.log("User ready!");
// } else {
//     console.log("User not ready!");
// }

// 'if...else...if' statement (topic)

/* Both if and if … else statements give us great flexibility in how code can behave in relation to anything else. 
But branching the code execution flow only to two branches is sometimes not enough. 
There’s a simple solution to this in JavaScript – we can nest if ... else statements. */

// let number = prompt("Enter a number", 0); // ("string", 0) -> 0 pailai dekhi hunxw
 
// if (number < 10) {
//     alert("<10");
// } 
// else if (number < 30) {
//     alert("<30");
// } 
// else if (number < 60) {
//     alert("<60");
// } 
// else if (number < 90) {
//     alert("<90");
// } 
// else if (number < 100) {
//     alert("<100");
// } 
// else if (number == 100) {
//     alert("100")
// } 
// else {
//     alert(">100")
// }

// Conditional Operator (topic)

/* It allows us to perform one of two actions based on the value of the first operand. 
Most often it is used as an alternative to the if ... else instruction when you want to assign one of two values to 
a variable, depending on a certain condition.

In such cases, it is simply shorter and a bit more readable than the if ... else construction. */

// let price = 100;
// let shippingCost;
// if (price > 50) {
//     shippingCost = 0;
// } else {
//     shippingCost = 5;
// }
// console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

// ternary

// let price = 100;
// let shippingCost = price > 50 ? 0 : 5;
 
// console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

// 'switch...case statement' (topic)

/* The last type of statement that is used for conditional code execution is a switch statement. 
compared to the if statement, it is not a construction used especially often. 
It’s somewhat similar to nested if … else statements, but instead of evaluating different expressions, 
switch evaluates one conditional expression and then tries to match its value to one of the given cases. */

// Syntax:

// switch (expression) {
//     case first_match:
//         code
//         break;
//     case second_match:
//         code
//         break;
//     default:  
//         code
// }

let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
