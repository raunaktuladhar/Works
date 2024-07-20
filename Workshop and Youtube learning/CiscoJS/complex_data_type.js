// complex types to only two of them: objects and arrays.

// Objects (topic)

/* Objects have many applications in JavaScript.
is to use it as a structure known in computer science as a record. 
A record is a collection of named fields. Each field has its own name (or key) and value assigned to it. 
In the case of JavaScript objects, these fields are usually called properties. 
Records, or in our case objects, allow you to store multiple values of different types in one place. 
In JS, there are a few ways to create objects, but the easiest and fastest is to use the curly bracket literal. */

// let testObj = {}
// console.log(typeof testObj)  // -> object

/* The object we create and store in the variable testObj is not particularly useful, because it’s empty. 
We have not defined any fields in it, i.e. any key–value pairs. 
Let's try it again, this time by defining an object containing two fields with keys nr and str. */

// let testObj = {
//     nr : 600,
//     // str = "text"  // An '=' can only follow a property name when the containing object literal is part of a destructing pattern.
//     str : "text"


// };
// console.log(testObj.nr);     // 600
// console.log(testObj.str);    // text

/* Note that we have created objects using the same literal, 
but at the same time we have created properties that are key–value pairs. 
Properties are separated by commas. 
A specific property (field) of an object can later be referred to with dot notation. 
This notation requires the name of the object (a literal or the name of a variable containing the object) to be followed by a dot, followed by the field name (key) again. */

/*  The simplest reason for using them may be the desire to store several values in one place, 
which are linked to each other for some reason.  */

// let user1 = {
//     name : "Raunak",
//     surname : "Tuladhar",
//     age : 20,
//     email : "raunaktuladhar13@gmail.com"
// };

// let user2 = {
//     name : "Raully",
//     surname : "Mon",
//     age : 6,
//     email : "raullymon@gmail.com"
// };

// /* we can also modify the whole object by adding a new, previously non-existent property. 
// We also do this using dot notation – 
// if during an attempt to modify the property the interpreter does not find the key we specify, it will create it. */

// console.log(user1.name);
// console.log(user2.name);

// console.log(user1.age);
// user2.age = 10;
// console.log(user2.age);

// user1.phone = 9861585891;
// console.log(user1.phone);

// /* If you can add new fields to an existing object, can you also delete them? 
// Of course you can: the delete operator is used for this. */

// user2.phone = 9808324642;
// console.log(user2.phone);

// delete user2.phone;
// console.log(user2.phone)   // undefined

// Array (topic)

/* An array, like an object, is a complex data type that can be used to store a data collection. 
Similar to an object, the stored data (the values) can be of any type. 
The difference between these structures is that in an array we only store values, 
without the associated names (i.e. the keys). */

/* The easiest way to create arrays in JavaScript is to use square brackets (it’s an array literal).
This way, we can create both an empty array, into which the elements will be inserted later, 
and an array containing some initial elements (which will be separated by commas).
we put the index of the element we are interested in. */

// let days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];
// console.log(days[0]);
// console.log(days[2]);
// console.log(days[5]);

// days[0] = "Sunday";
// console.log(days[0]);

// let emptyArray = [];
// console.log(emptyArray[0]);

let animals = [];
console.log(animals[0]);

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]);   // -> dog
console.log(animals[1]);   // -> undefined
console.log(animals[2]);   // -> cat

/* Usually, we store the same type of data in one array, but as we mentioned earlier, 
this is not required by JS. So we can easily create an array containing elements of different types. */

// let  values  =  ["Test",  7,  12.3,  false];

/* we can also store arrays as elements of the array, 
and we can access the elements of this nested array using multiple square brackets. */

let names = [["raunak", "raully", "ragina"], ["saugat", "sugat", "sagar"]];
console.log(names[0]);
console.log(names[0][1]);
console.log(names[1][1]);



