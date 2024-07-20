// var and let (topic)

// var & let -> variables and const -> constants
// var comes from original JS syntax and let was introduced much leter

// never declare keyword as variables


// var height;
// console.log(height);      // undefined
// console.log(weight);      // ReferenceError: weight is not defined

// using let

// let height;
// console.log(height);    // undefined

/* One of the basic differences in the use of var and let is that;
 let prevents us from declaring another variable with the same name (an error is generated). 
 Using var allows you to re-declare a variable, which can potentially lead to errors in the program execution. */

// using var

// var height;
// var height;
// console.log(height);    // undefined

// using let

// let height;
// let height;
// console.log(height);    // SyntaxError: Identifier 'height' has already been declared

// its better to use let

// Initializing variables (topic)
// initialization means assigning variables using = operator

// let height = 180;
// let anotherHeight = height;
// let weight;
// console.log(height);           // 180
// console.log(anotherHeight);   // 180
// weight = 70;                 // 70
// console.log(weight);

/*By the way, pay attention to one thing;
If you specify a variable name in console.log, the interpreter recognizes it and displays its value;
If you put the same name in quotation marks, it will be treated as plain text, and displayed as such. */

// let height = 180;
// console.log(height);        // 180
// console.log("height");     // height

// height = 180; 
// console.log(height);   

// sometimes above is also write

// use "use strict" as long as you are not running some old code
// "use strict";
// height = 180; // ReferenceError: height is not defined
// console.log(height);    

// changing variable values (topic)

/*Variables, as their name suggests, can store data that will vary. 
Changes are made by assigning a new value to the variable, which overwrites the previous one.*/ 

// let steps = 100;
// console.log(steps); //100

// steps = 120;
// console.log(steps); //120

// steps = steps + 200;
// console.log(steps); //320

// let greeting = "Hello";
// console.log(greeting); //Hello
// greeting = 1;
// console.log(greeting); //1

/* JS allows us to easily replace the greeting variable with a value whose type is different from
the one originally stored there. 
JS goes one step further and not only allows us to change the types of values kept in a variable, 
but it also performs their implicit conversion */ 

// let greeting = "Hello!";
// let counter = 100;

// greeting = greeting + counter;
// console.log(greeting); //Hello!100

// JavaScript interprets 100 as a number, but "100" as a string.

// constants -> used to declare containers similar to variables (topic)

// const  greeting  =  "Hello!"; // This is correct way

// const  greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
// greeting  =  "Hello!";

/*As we said, a change in the constant is impossible. 
This time the declaration is correct, but we try to modify the value stored in the constant.*/

// const  greeting  =  "Hello!";
// greeting  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.

/* The main purpose of a constant is to eradicate the possibility of accidentally changing a value stored in it. 
This is important when we have some values that really should never change. */ 

// Scope (topic)
// One of the basic elements that influence the scope of variables is a program block.

// program blocks:-

/* First, we declare the variable counter. 
Then we open a block inside which we initialize this variable and display its contents. 
Outside the block, we increase the value stored in the variable by 1 and display it again. 
In this case, the interpreter will execute the program as if it hadn't noticed the block, 
going through the instructions before the block, in the block, and after the block.*/


// let counter;
// console.log(counter); // undefined

// { // this is the starting of program block

//     counter = 1;
//     console.log(counter);  // 1
// } // this is the ending of program block

// counter = counter + 1;
// console.log(counter);  // 2

// Program blocks can be nested, that is, we can create one block inside of another one.

// let counter;
// console.log(counter); // undefined

// {  // this is starting of program block

//     counter = 1;
//     {
//         console.log(counter); // 1
//     }
// }  // this is the ending of program block

// counter = counter + 1;
// console.log(counter);  // 2

/* the code inside the block has been moved to the right. This is called an indentation. 
For a JS interpreter, it doesn't matter at all, but it definitely increases the readability of the code, 
allowing the readers (including you) to quickly find out which parts of the code are inside, 
and which are outside, the block. 
Code editors usually add indentations in the right places by themselves, 
but it is a good habit to remember this yourself and, if they do not appear automatically, format the code by hand. */


// let and const :-

/* If we declare any variable or constant using let or const, respectively, outside the code blocks, 
they will be global. if we declare something using let or const inside a block,
This will create a local variable or constant. 
It will be visible only inside the block in which it was declared and in blocks that can optionally be nested in it. */

// let height = 180;
// {
//     let weight = 70;
//     console.log(height);  // 180
//     console.log(weight);  // 70
// }
// console.log(height);  // 180
// console.log(weight);  // ReferenceError: weight is not defined

/* The height variable, declared outside the block, is global. 
The weight variable is local – its scope is limited by the block in which it was declared. 
This is clearly visible when trying to display the values of both variables inside and outside the block. */

// let height = 200;
// {
//     let weight = 100;
//     {
//         let info = "tall";
//         console.log(height);  // 200
//         console.log(weight);  // 100
//         console.log(info);  // tall
//     }
//     console.log(height);  // 200
//     console.log(weight);  // 100
//     console.log(info);  // ReferenceError: info is not defined
// }

// var

/* In the case of variable declarations using the keyword var, the situation is slightly different. 
The variable declared using it outside the blocks will, as in the case of let, be global, 
in other words, it will be visible everywhere. 
If you declare it inside a block, then... well, it will usually turn out to be global again. */

// var height = 180;
// {
//     var weight = 70;
//     console.log(height);  // 180
//     console.log(weight);  // 70
// }
// console.log(height);  // 180
// console.log(weight);  // 70

// /* The problem is that var ignores ordinary program blocks, treating them as if they do not exist. 
// So in what situation can we declare a local variable using var? Only inside a function. */

// Functions :-

// A function is just a separated piece of code that you name, in the same way that you name a variable.

/* you can copy this piece of code, all of its instructions, to any place where you want to use it. 
However, this would be very inefficient. 
First of all, the size of our program would grow unnecessarily. 
Secondly, if we would like to make some changes to this piece of code, 
for example, to correct some bug, we would have to do it in every place where we used it. */

// function testFunction(){
//     console.log("Hello");  // it wont run
//     console.log("World");  // it wont run
// }


/*  The definition starts with the function keyword, followed by the function name we invented. 
After the name, you see parentheses, which optionally could contain parameters passed to the function 
Then we open the program block, which contains the instructions belonging to the function. 
When defining a function, the instructions contained in the function are not executed. 
To execute the function, you must call it independently, using its name.*/

// For eg:-

// function testFunction(){
//     console.log("Hello");
//     console.log("World");
// }
// testFunction();  // it will run

// console.log("let's  begin:");  //  ->  let's  begin:
// console.log("Hello");  //  ->  Hello
// console.log("World");  //  ->  World
// console.log("and  again:");  //  ->  and  again:
// console.log("Hello");  //  ->  Hello
// console.log("World");  //  ->  World
// console.log("and  once  more:");  //  ->  and  once  more:
// console.log("Hello");  //  ->  Hello
// console.log("World");  //  ->  World

// It will print out a sequence of text on the console

// var keyword continued (topic)

/* If we declare a variable using the keyword var inside a function, 
its scope will be limited only to the inside of that function (it's a local scope). 
This means that the variable name will be correctly recognized only inside this function. */

// var globalGreeting = "Good";

// function testFunction(){
//     var localGreeting = "Morning";
//     console.log("function:");      // function:
//     console.log(globalGreeting);   // Good
//     console.log(localGreeting);    // Morning
// }
// testFunction();

// console.log("main program: ");   // main program:
// console.log(globalGreeting);     // Good
// console.log(localGreeting);      // ReferenceError: localGreeting is not defined

/* we declared the global variable globalGreeting. Then we defined the testFunction function, 
inside which we declared the local variable localGreeting. 
Then we called the testFunction function, which resulted in writing out the values of both variables 
Attempting to access the local variable localGreeting outside the function will fail. 
So we’ve finally succeeded in demonstrating that variable declarations using the word var can also be local. */


// Variable shadowing(topic)
// It means that we can declare a global variable and a local variable of the same name.
// This is not best programming practice, however, and we should avoid such situations.
// If we are to avoid such situations, it would be good to see exactly what they are about.

// let  counter  =  100;
// console.log(counter);  //  ->  100
// {
//        counter  =  200;
//        console.log(counter);  //  ->  200
// }
// console.log(counter);  //  ->  200

/* The counter variable, declared at the beginning of the program, is a global variable. 
Throughout the program, also inside the block, we operate on this very variable. 
A small change in the code is enough for the program to behave completely differently. */

// let  counter  =  100;
// console.log(counter);  //  ->  100
// {
//      let  counter  =  200;
//      console.log(counter);  //  ->  200
// }
// console.log(counter);  //  ->  100

/* This time in the block, instead of counter = 200; (i.e. changes in the contents of the global counter variable), 
the let counter = 200; statement appears (i.e. declarations of the local variable combined with its initialization). 
The interpreter would consider such a situation to be wrong if the re-declaration appeared in the same scope. */

/* Shadowing is also present in variable declarations using the word var, 
and this time the local scope is limited not by the program block, but by the function block. */

// var counter = 100;

// function testFunction(){
//     var counter = 200;
//     console.log(counter);
// }

// console.log(counter);  // 100
// testFunction();        // 200
// console.log(counter);  // 100 


// Hoisting (topic)
// Hoisting only concerns the declaration, not initialization.

// var  height  =  180;
// console.log(height);    //  ->  180
// console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined

/* In the above example, we forgot to declare the variable weight. 
The result is obvious: we’re referring to a variable which does not exist.
Something like this must end in an error. */

// var  height  =  180;
// console.log(height);    //  ->  180
// console.log(weight);    //  ->  undefined
// var  weight  =  70;
// console.log(weight);    //  ->  70

/* This time we declared our variable, but in a rather strange place. 
Together with the declaration, we also performed initialization. 
The result of the program may be a bit surprising. This time there are no errors.
Hoisting has worked, and the declaration has been moved by the interpreter to the beginning of the range */




