// Arrow functions (=>)

/* A concise way to write function expressions 
Good for simple functions that use only once
(parameters) => some code  */


// Example 1

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                          console.log(`You are ${age} old`)};

// hello("Bro", 20);

// setTimeout function (topic)

/* it accepts callback, then a given amount of time */

// setTimeout(hello, 3000);

// function hello(){
//     console.log("Hello");
// }

// hello();

// or

// setTimeout(function hello(){
//     console.log("Hello");
// }, 3000);

// or

// setTimeout( () => console.log("Hello"), 3000)

// example 3

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map( (element) => Math.pow(element, 2));

const cubes = numbers.map( (element) => Math.pow(element, 3));

const evenNums = numbers.filter( (element) => element % 2 === 0);

const oddNums = numbers.filter( (element) => element % 2 !== 0);

const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(numbers);
console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
