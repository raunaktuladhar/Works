/* The only operator in this group is the concatenation +. 
This operator will convert everything to a String if any of the operands is a String type. 
Finally, it will create a new character string, attaching the right operand at the end of the left operand. */

// let greetings = "Hi";
// console.log(greetings + " " + "Alice"); // -> Hi Alice ; " " -> space
 
// let sentence = "Happy New Year ";
// let newSentence = sentence + 10191;
 
// console.log(newSentence); // -> Happy New Year 10191
// console.log(typeof newSentence); // -> string

// Compound Assignment Operators(topic)

/* You can probably guess that this operator can also be used in conjunction with the replacement operator. 
Its operation is so intuitive that we will stop with a simple example: */ 

// let sentence = "Happy New ";
// sentence += "Year ";
// sentence += 10191;
// console.log(sentence); // -> Happy New Year 10191

// Comparison Operators (topic)

/* Comparison operators are used to check the equality or inequality of values. 
All comparison operators are binary, and all of them return a logical value representing the result of the comparison, 
true or false.

JS will try to convert the values that are being compared if they are of different types. 
It makes sense to check equality, or which is greater, using numeric representation, 
and JavaScript will in most cases convert types to a Number before comparison. 
There are two exceptions to this, strings and the identity (strict equality) operator. 
Strings are compared char by char

To check if the operands are equal, we can use either the identity (strict equality) operator === or the equality operator ==.

The first is more restrictive, and in order to return true, the operands must be identical 
(i.e. they must be equal and of the same type).*/

// console.log(10 == 5); // -> false
// console.log(10 == 10); // -> true
// console.log(10 == 10n); // -> false
// console.log(10 == "10"); // -> false
// console.log("10" == "10"); // -> true
// console.log("Alice" == "Bob"); // -> false
// console.log(0 == false); // -> false
// console.log(undefined == false); // -> false
// console.log(NaN == NaN)

/* The equality operator requires that they are only equal, and their types are not compared. 
So if the operands are of different types, the interpreter will try to convert them to numbers, 
for example, false will convert to 0, true to 1, undefined to NaN, null to 0, 10n to 10 and "123" to 123, etc.

Note: if any of the operands has a NaN value (or has been converted to NaN, e.g. with undefined), 
the equality operator will return false. */

/* Remember! 
Use the identity operator (==) unless you intentionally allow for a positive comparison between the different types. 

There are also complementary operators to those just demonstrated 
– the nonidentity operator !== 
- the inequality operator !=. 

The first returns true if the operands are not identical, 
in other words, they are equal but of different types, or they are simply different. 
The second returns true if the operands are different.*/

// console.log(10 !== 5); // -> true
// console.log(10 !== 10); // -> false
// console.log(10 !== 10n); // -> true
// console.log(10 !== "10"); // -> true
// console.log("10" !== "10"); // -> false
// console.log("Alice" !== "Bob"); // -> true
// console.log(0 !== false); // -> true
// console.log(undefined !== false); // -> true
// console.log(10 != 5); // -> true
// console.log(10 != 10); // -> false
// console.log(10 != 10n); // -> false
// console.log(10 != "10"); // -> false
// console.log("10" != "10"); // -> false
// console.log("Alice" != "Bob"); // -> true
// console.log(0 !=  false); // -> false
// console.log(undefined != false); // -> true
// console.log(NaN != NaN); // -> true
// console.log(2+3 != 6)

/* We also have operators that allow us to check if one of the operands is bigger than >, 
smaller than <, bigger than or equal to >=, and smaller than or equal to <=. 
These operators work on any type of operand, 
but it makes sense to use them only on numbers or values that will convert correctly to numbers. */

// console.log(10 > 100); // -> false
// console.log(101 > 100); // -> true
// console.log(101 > "100"); // -> true
 
// console.log(101 < 100); // -> false
// console.log(100n < 102); // -> true
// console.log("10" < 20n); // -> true
 
// console.log(101 <= 100); // -> false
// console.log(10 >= 10n); // -> true
// console.log("10" <=  20); // -> true

/* You can also use them to compare strings that do not represent numbers, 
but the algorithm of this comparison is quite complex, and the comparison itself is not very useful. 
By way of simplification, single characters of both strings are tested on the same positions. 
It is assumed that the values of the single characters correspond to their positions in the alphabet 
(the letter b has a higher value than the letter a). 
Upper-case letters have lower values than lower-case letters, and digits have even lower values. */

// console.log("b" > "a"); // -> true
// console.log("a" > "B"); // -> true
// console.log("B" > "A"); // -> true
// console.log("A" > "4"); // -> true
// console.log("4" > "1"); // -> true
 
// console.log("ab1" < "ab4"); // -> true
// console.log("ab4" < "abA"); // -> true
// console.log("abB" < "aba"); // -> true
// console.log("aba" < "abb"); // -> true
 
// console.log("ab" < "ab4"); // -> true

// Note: the symbol => exists in JS, but is not an operator – we use it in the construction of arrow functions.


// Other Strings(topic)

// typeof

/* It is a unary operator, which checks the type of operand (it can be a variable or a literal). 
The operator returns a string with the type name, such as "boolean" or "number". */

// let year = 10191;
// console.log(typeof year); // -> number
// console.log(typeof false); // -> boolean

// instanceof

/* It is a binary operator that checks whether an object (left operand) is of some type (right operand). 
Depending on the test result, it returns true or false. */

// let names = ["Patti", "Bob"];
// let name = names[0];
// console.log(names instanceof Array); // -> true
// console.log(name instanceof Array); // -> false

// delete

/* It allows you to delete a selected field of the object whose name is indicated with an operand. 
It is unary operator. */

let user = {
    name: "Alice",
    age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined
console.log(user);

// ternary

/* The last of the operators discussed is quite unusual, because it is the only operator using three operands. 
It is a conditional operator. Based on the value of the first operand (true or false), 
the value of the second or third operand, respectively, is returned. 
This operator is most often used to place one of the two values in the variable depending on a certain condition. 
The three operands are separated from each other by ? (the first from the second) and : (the second from the third). */

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

/* Each of these operands can be an expression that must be calculated. 
In the following example, the first operand is a comparison of two numbers using a comparison operator. 
The result of the comparison will be false, which will be used by the conditional (ternary) operator. */

let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob

// Precedence

/* Precedence can be presented as a numerical value – 
the higher the value, the higher the priority of the operation. */

/* Practically in all the examples where we presented the operation of successive operators, 
we followed instructions in which one operator was used. 
In reality, usually multiple operators are used simultaneously. 
At this point, a quite important question arises: in what order will the interpreter perform them? 
This will of course affect the final result of the operators, 
so it is worth taking this into account when writing the instructions. */

let a = 10;
let b = a + 2 * 3;
let c = a + 2  < 20 - 15;
console.log(a); // -> 10
console.log(b); // -> 16  (BODMAS)
console.log(c); // -> false

/* The JS interpreter uses two operator properties to determine the sequence of operations: 
precedence and associativity. 
Precedence can be treated as a priority, with some operators having the same precedence (e.g. addition and subtraction). 
Associativity allows you to specify the order of execution 
if there are several operators with the same priorities next to each other. */













