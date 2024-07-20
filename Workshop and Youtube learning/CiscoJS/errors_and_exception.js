// Errors (topic)

/* Errors will happen.
You have certainly witnessed, multiple times, different applications malfunctioning, becoming unstable, 
returning unexpected results, or even shutting down uncontrollably. 
Unfortunately, we, the programmers, are responsible for most of these. 
Even if we didn't cause these problems directly, 
we probably didn't anticipate certain situations that could lead to a program malfunctioning 
(e.g. lack of a network connection). */

// Natural languages and communication errors (topic)

/* Imagine that you are organizing a party by the lake for your friends. 
As the organizer, you explain to everyone how to get there, but as always in such situations, someone gets lost. 
They’re almost there, but then they send a text message asking for additional tips. 
You send an answer, in which you tell them to turn right on the first path after leaving the forest, 
and then drive for another 500 meters. Since you are still on your way, you ask them to wait on the spot. 
The correct message could look like this:

After leaving the forest, turn right into the first path, and drive 500m. Wait on the spot. */

// Errors and exceptions in JavaScript (topic)

/* Let's try to generate syntax, semantic, and logical errors in JavaScript, for tests in a controlled way. 
Let's say we want to write a simple arrow function called multiply, which will multiply the two provided arguments: */

// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);

/* In the example, there is a typical syntax error: 
we’ve forgotten about the comma between the parameters of the multiply function. 
The error is detected by the JavaScript engine, which does not allow us to execute the program. 
We correct it, but we also make another error: */

// let multipl = (a, b) => a + b;
// let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
// console.log(result);

/* First, however, let's correct the error and run the program again: */

// let multiply = (a, b) => a + b;  
// let result = multiply(10, 20);
// console.log(result); // -> 30 ?

// Errors without exceptions (topic)

/* In JavaScript, not all erroneous situations throw exceptions. Many of them are handled in a slightly different way. 
The best example are arithmetic errors. */

// console.log(100 / 0); // -> Infinity
// console.log(100 * "2"); // -> 200
// console.log(100 * "abc"); // -> NaN


// Limited confidence (topic)

// let sX = prompt("Enter the first number");
// let sY = prompt("Enter the second number");
// let x = Number(sX);
// let y = Number(sY);
// if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
//     console.log(x / y);
// } else {
//     console.log("incorrect arguments");
// }

// Part-2

// A few more details about JavaScript errors and exceptions (topic)

/* Let's try to organize the information about errors and exceptions, and above all, their handling. 
This time, let's look at the problem from a strictly functional point of view. 
We will start with an overview of the most important types of errors detected by JavaScript, 
discuss in more detail the try... catch construction, and show that we can also directly throw exceptions. */

// Basic types of errors

// SyntaxError (topic)

/* A SyntaxError appears when a code is ill-formed, when there are typos in the keywords, 
unmatching parentheses or brackets, etc. The code can’t even be executed, as JavaScript isn’t able to understand it. 
The corresponding error is therefore thrown before the program is started. */

// "use strict";
// iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
//     console.log("true");
// }

// ReferenceError (topic)

/* It occurs when we try to access a function or a variable that doesn't exist. 
The JavaScript engine does not know the meaning of the given name, 
so it is an error that we will classify as a semantic error. 
The corresponding exception is thrown at the execution time of the program, 
when the wrong instruction is reached (i.e. in JavaScript, semantic errors are run-time errors). */

// let a = b; // -> Uncaught ReferenceError: b is not defined

// TypeError (topic)

/* This type of error occurs when a certain value is not of the expected type 
(i.e. you try to perform an operation on it that is not acceptable). 
Typical examples are changing the constant value or checking the length of a variable that is not a string. 
This error is particularly important when working with objects that are outside the scope of this course 
(we will talk about them in the next part of the course). 
This is a typical run-time error, so the appropriate exception will be thrown while the program is running, 
after reaching the problematic instruction. */

// const someConstValue = 5;
// someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

/* Trying to store the new value to the constant someConstValue has failed for obvious reasons, 
resulting in a TypeError. */

// let someNumber = 10;
// someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function

// RangeError (topic)

/* This type of error is generated when you pass a value to a function that is outside its acceptable range.
Again, it is a run-time error, and the exception is thrown while the program is running, 
after reaching the wrong instruction. 
In fact, this exception is more useful when writing your own functions and handling errors. 
You can then throw an exception in certain situations. */

// let testArray1 = Array(10);
// console.log(testArray1.length); // -> 10
// let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
// console.log(testArray2.length);

// Other Errors (topic)

/* There are a few more error types: EvalError, InternalError, and URIError, but they’re rather rare */

// The try...catch statement (topic)

/* Exceptions interrupt the program execution. 
The try...catch construction, which we also mentioned before, allows you to change this default action. 
The program will interrupt what it is currently doing, but it will not terminate automatically. */

// Syntax: 

// try {
//     // code to try
// } catch (error) {
//     // code to run in case of an error, which throw an exception
// }


// try {
//     let a = b;
// } catch (error) {
//     console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
// }
// console.log("We handled the exception!"); // -> we handled the exception!


// Conditional exception handling (topic)

/* Sometimes we want to be able to react differently to specific types of errors inside the catch block. 
We can do this by using the operator instanceof. 
We’ll discuss the operator itself further down the road, because it’s a rather complicated topic. 
For now, it’s enough to know how we can use it when handling errors.
The syntax for the instanceof operator looks like this: */

// variable instanceof type 

// let a = -2;
// try {
//     a = b;
// } catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
//         a = -2;
//     } else {
//         console.log("Other error - " + error);
//     }
// }
// console.log(a); // -> -2

// The finally statement (topic)

/* The last optional block of the try statement is the finally block. 
It can be used with or without the catch block, and it’s always executed after try and catch blocks, 
regardless of whether any errors are thrown. */

// Syntax:

// try {
//     // code to try
// } finally {
//     // this will be always executed
// }

// let a = 10;
// try {
//     a = 5;
// } finally {
//     console.log(a); // -> 5
// }
// console.log(a); // -> 5

// Let's break down our example by trying to refer to a non-existent variable, b.

// let a = 10;
// try {
//     a = b;  // ReferenceError
// } finally {
//     console.log(a); // -> 10
// }
// console.log(a);

// let a = 10;
// try {
//     a = b;  // ReferenceError
// } catch (error) {
//     console.log("An Error!"); // -> An Error!
// } finally {
//     console.log("Finally!"); // -> Finally!
// }
// console.log(a); // -> 10

// The throw statement (topic)

// console.log("start"); // -> start
// throw 100; // -> Uncaught 100
// console.log("end");

// console.log("start"); // -> start
// try {
//     throw 100;
// } catch (error) {
//     console.log(error); // -> 100
// }
// console.log("end"); // -> end

