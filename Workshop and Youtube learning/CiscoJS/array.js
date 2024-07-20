// let user1 = {
//     name: "Raunak",
//     surname: "Tuladhar",
//     age: 20,
//     email: "raunaktuladhar@gmail.com"
// };

// let user2 = {
//     name: "Modit",
//     surname: "Tuladhar",
//     age: 21,
//     email: "modittuladhar@gmail.com"
// };
// console.log(user1.age)
// console.log(user2.name)

// or

// let users = [
//     {
//         name: "Raunak",
//         surname: "Tuladhar",
//         age: 20,
//         email: "raunaktuladhar@gmail.com",
//     },
//     {
//         name: "Modit",
//         surname: "Tuladhar",
//         age: 21,
//         email: "modittuladhar@gmail.com"
//     }
// ];

// console.log(users[0].name)
// console.log(users[1].email)

// // Let's try to add a new user to the array.

// users[2] = {
//     name: "Raully",
//     surname: "Mon",
//     age: 19,
//     email: "raullymon@gmail.com"
// }

// console.log(users[0].name)
// console.log(users[1].age)
// console.log(users[2].surname)

// // Now let's do a little experiment, and apply the typeof operator to the variable containing the array. 
// // The result may be somewhat surprising:

// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// console.log(typeof  days);  //  ->  object

// let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
// let  day  =  "Sunday";
   
// console.log(typeof  days);  //  ->  object
// console.log(typeof  day);  //  ->  string
   
// // The instanceof operator is a two-argument operator, 
// // which requires the tested variable (or literal) and object class to be specified. 
// // In our case, the class isArray. The operator returns true or false, depending on the test result.

// console.log(days  instanceof  Array);  //  ->  true
// console.log(day  instanceof  Array);  //  ->  false

// Length
/* The length property is used to get information about the length (the number of elements) of the array 
(including empty positions between existing elements). */

// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length); //length of array

// names[5] = "Raunak";
// console.log(names.length); //length of string

// console.log(names);

// console.log(names[3])
// console.log(names[4])
// console.log(names[5])

// IndexOf
/* The indexOf method is used to search the array to locate a given value. 
If the value is found (the element is in the array), its index (position) will be returned. 
The method returns -1 if the element is not found. 
If there is more than one element with the same value in the array, the index of the first element is returned. */

// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.indexOf("Mateo"));  //  ->  2
// console.log(names.indexOf("Victor"));  //  ->  -1

// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.length);  //  ->  4
   
// names.push("Amelia");
// console.log(names.length);  //  ->  5
// console.log(names);  //  -  >  ["Olivia",  "Emma",  "Mateo",  "Samuel",  "Amelia"]

// Unshift
/* The unshift method works similarly to push, 
the difference being that a new element is added to the beginning of the array. 
The array length is increased by 1, 
all the old elements are moved to the right and the new element is placed in the empty space 
that has been created at the beginning of the array. The index of the new element is 0. */

// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// names.unshift("Raunak")
// console.log(names)

// pop
/* The pop method allows you to remove the last element from the array. 
As a result of its execution, the element with the largest index is returned, 
while at the same time it is removed from the original array. The length of the array is obviously reduced by 1. */

// let  names=  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.length);  //  ->  4
   
// let  name  =  names.pop();
// console.log(names.length);  //  ->  3
// console.log(name);  //  ->  Samuel
// console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo"]

// shift
/* The shift method works similarly to pop, 
only this time we remove the element from the beginning of the array (with the index 0). 
The removed element is returned by the method, all other elements are shifted to the left, 
completing the empty space. The length of the original array is reduced by 1. */

// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
// console.log(names.length);  //  ->  4
   
// let  name  =  names.shift();
// console.log(names.length);  //  ->  3
// console.log(name);  //  ->  Olivia
// console.log(names);  //  ->  ["Emma",  "Mateo",  "Samuel"]

// reverse
/* The reverse method reverses the order of elements in the array. 
As a result of its calling, the first element of the original array will become the last, 
the second last but one, and so on. */

// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
// names.reverse();
// console.log(names);  //  ->  ["Samuel",  "Mateo",  "Emma", "Olivia"]

// slice

/* The slice method allows you to create a new array from selected elements of the original array. 
Calling the method does not affect the original array. 
The method takes either one or two integer values as arguments.

The basic combinations are:

one argument larger than zero – all elements from the index given as an argument to the end of the array are copied;

two arguments larger than zero – the element from the index specified as the first argument to the element specified as
the second argument are copied;

two arguments, first positive, second negative – all elements from the specified index to the end of the array are 
copied, except for the specified number of the last elements 
(e.g. argument -3 means that we do not copy the last three elements)

one negative argument – the specified number of the last elements are copied to the end of the array 
(e.g. -2 means that you copy the last two elements). */ 

// let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
   
// let  n1  =  names.slice(2);
// console.log(n1);  //  ->  ["Mateo",  "Samuel"]
   
// let  n2  =  names.slice(1,3);
// console.log(n2);  //  ->  ["Emma",  "Mateo"]
   
// let  n3  =  names.slice(0,  -1);
// console.log(n3);  //  ->  ["Olivia",  "Emma",  "Mateo"]
   
// let  n4  =  names.slice(-1);
// console.log(n4);  //  ->  ["Samuel"]
   
// console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]


// Concat
/* The concat method creates a new array by attaching elements from the array given as an argument to the original 
array elements. The method changes neither the original array nor the array specified as an argument. */ 

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names.concat( otherNames);
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel",  "William",  "Jane"]

