// Testing and debugging your code (topic)

/* As we have already written, errors in programs happen. 
It is completely normal. 
At the beginning, you will mostly make errors resulting from a lack of knowledge of the programming language 
(e.g. syntax errors). They will be easy to correct, 
because the interpreter will detect them and usually will also suggest what is wrong. 
Logical errors, however, are a different problem. 
As we showed earlier, the interpreter has no way of detecting them, 
so we have to look by ourselves for the answer to the question: why does the program not work as we assumed it would? */

// function average(a, b) {
//     return a + b / 2;
// }
 
// console.log(average(2, 10));   // -> 7 expected: 6
// console.log(average(5, 5));    // -> 7.5 expected: 5

// Debugging (topic)

/* To be conducted efficiently, debugging requires tools, and if our code is executed in the browser, 
we almost certainly have all the necessary tools already available.
To check if our browser supports this functionality, 
we can simply try to execute this code with the developer console opened. */

// console.log("Before debugger");
// debugger;
// console.log("After debugger");

/* If the debugger is present, the console will show only the "Before debugger" log, 
and depending on the installed browser, we should see information about code execution either stopped, 
or paused in the debugger, or in debug mode. 
The second log message is not displayed because the debugger statement works as a breakpoint in the code execution. 
So whenever JavaScript encounters the debugger statement, 
it checks if the debugger is present, and if so, code execution is halted at that exact point. 
This of course is not helpful by itself, but this is only the beginning of the features of the debugger. */

// Step-by-step program execution (topic)

/* One of the main features of the debugger is its ability to execute code on a step-by-step basis. 
This means that we can stop program execution at any place using a debugger statement, 
and then continue execution one instruction at a time. */

/* In general, all modern browsers support the following options to control the execution of the script in debug mode:

Resume / Continue : This will resume the execution of the script in a normal way, 
                    and is used when we’ve checked what we wanted to check, and now we want to continue with the execution of the script.

Step Into : This executes the next instruction in the code only, and pauses it again, 
            and we use this when we want to analyze the code in detail, 
            or check which exact path the execution takes when complex branching is happening due to cascading if...else statements,
            or other complicated logic. 
            If the next instruction is a function call, using Step Into will jump inside the code of this function.

Step Over : This works like Step Into, except that if this is used when the next instruction is a function call, 
            the code will not jump into the function code, but the whole function will be executed, 
            and the program will be paused again after jumping out of this function. 
            This is often used when the next instruction is a call to a function where we don’t know 
            if it will have any impact, or we’re simply not interested in looking.

Step Out : This allows us to immediately jump out of a function in which the code is paused. */


