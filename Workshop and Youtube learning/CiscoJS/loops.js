/* In programming, loops are the second form of flow control statement. 
Together with conditional execution statements like if and switch, 
they allow for almost infinite freedom in how the application can work from an algorithmic point of view. 
While conditional statements are able to change code behavior, 
loops are an easy way to repeat any fragment of the code as many times as we want, or until some condition is met. 
There are a few types of loops in JavaScript, but we can loosely split them into two categories:

loops that are repeated a given number of times;
loops that continue until some condition is met. */

// 'while' loop statement (topic)

// let n = 0;
// while(n < 91) {
//     console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
//     n += 10;
// }

// let isOver = false;
// let counter = 1;
 
// while (!isOver) {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// }


// 'do...while' statement (topic)

/* The do ... while loop is very similar to the plain while loop, the main difference being that in a while loop, 
the condition is checked before each iteration, and in the do ... whileloop, 
the condition is checked after each iteration. */

// let isOver;
// let counter = 1;
 
// do {
//     isOver = !confirm(`[${counter++}] Continue the loop?`);
// } while (!isOver);

// let condition = false;
 
// while (condition) {
//     console.log("A while loop iteration."); // never executed
// }
 
// do {
//     console.log("A do ... while loop iteration."); // executed once
// } while (condition);

// 'for' loop (topic)

/* The for loop is part of the second type of loops, 
the one which is better in situations where we know how many times the loop should be executed */

// Syntax:

// for (initialization; condition; increment) {
//     block of code
// }

/* loop initialization statement;
loop condition statement;
loop increment statement. */

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

/* As shown in the syntax of the for loop, there are three expressions inside the parentheses. 
The let i = 0 is an initialization, i < 10 is a condition, and i++ is an increment.

Now let's try to rewrite the same example using the while loop: */

// let i = 0;
// while (i < 10) {
//     console.log(i);
// i++;
// }

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190

// or

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190
// console.log(values.length); // -> 4

// Loops and arrays (topic)

/* This time the program will be a bit more complicated. 
We want the user to enter names during the program's execution (we will use the prompt dialog box), 
which will be placed in the array one by one. Entering the names will end when the Cancel button is pressed. 
Then we will write the entire contents of the array (i.e. all entered names) to the console.*/

// let names = [];
// let isOver = false;
// while (!isOver) {
//     let name = prompt("Enter another name or press cancel.");
//     if (name != null) {
//         names.push(name);
//     } else {
//         isOver = true;
//     }
// }
 
// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// let values = [10, 30, 50, 100];
 
// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]); // -> 10, 30, 50, 100
// }
 
// for (let i = values.length - 1; i > 0; i--) {
//     console.log(values[i]); // -> 100, 50, 30, 10
// }
 
// for (let i = 0; i < values.length; i += 2) {
//     console.log(values[i]); // -> 10, 50
// }

// 'for...of' statement (topic)

/* In addition to the regular for loop, there are two specific versions, 
one of which, for ... of, is dedicated for use with arrays 
(and other iterative structures, which are however beyond the scope of this course). 
In a loop of this type, we do not explicitly specify any conditions or number of iterations, 
as it is performed exactly as many times as there are elements in the indicated array. */

// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let number of values) {
//     sum += number;
// }
// console.log(sum); // -> 190

// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cairo", population: 18.82e6 },
//     { name: "Mumbai", population: 19.32e6 },
//     { name: "São Paulo", population: 20.88e6 },
//     { name: "Mexico City", population: 21.34e6 },
//     { name: "Shanghai", population: 23.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 }
// ];
 
// for (let city of cities) {
//     if (city.population > 20e6) {
//         console.log(`${city.name} (${city.population})`);
//     }
// }

// 'for...in' statement (topic)

/* It iterates through all fields of the indicated object, placing the names of these fields (or keys) in the variable. */

// let user = {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@teleworm.us"
// };
 
// for (let key in user) {
//     console.log(key); // -> name, surname, age, email
// };

// 'break' and 'continue' statement (topic)

/* The break statement is used to terminate the execution of a loop or a switch statement. 
it exits the whole loop or switch statement, and jumps to the first statement after that loop or switch. */

// let i = 0;
// // An infinite loop
// while (true){
//     console.log(i);
//     i++;
//     if (i >= 5) {
//         break;
//     }
// }
 
// alert(`Exited the loop with a break (${i}).`);

/* Just like break, continue can be used in loops (but not in the switch statement). 
When used, it applies to the closest surrounding loop. 
The continue statement, in contrast to break, does not end the whole loop, 
but rather starts the next iteration of this loop. */

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

// 'break' statement

// When a JavaScript interpreter comes to a break, it will jump out of the current switch statement.

// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
 
// switch (gate) {
//     case "a":
//         alert("Gate A: empty");
//     case "b":
//         alert("Gate B: main prize");
//         win = true;
//     case "c":
//         alert("Gate C: empty");
//     default:
//         alert("No gate " + String(gate));
// }
 
// if (win) {
//     alert("Winner!");
// }
