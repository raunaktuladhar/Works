/* Operators in programming languages are symbols that are used to perform certain actions on arguments called operands.

Operands can be both values and variables. We have encountered operators several times in previous examples, 
for example, the assignment symbol = or the keyword typeof. 

Operators can be categorized in several ways. They are distinguished, 
for example, by the number of operands they work on.

The addition operator + is a typical binary operator (it uses two operands), 
while the typeof operator is unary (it uses only one operand).

In JS, there is also one ternary operator (operating on three operands), 
about which we will say a few words in a moment.

We can differentiate between prefix operators (occurring before the operand), 
postfix operators (after the operand) and infix operators (between operands). 
However, it’s common to categorize operators according to the context in which they are used: 
so we have assignment; arithmetic; logical; or conditional operators.*/

// assignment operators -> =\

// the strict equality operator === compares both value and type.
// the loose equality operator == performs type coercion(persuades different types)

/* The basic assignment operator is the equals sign =, 
This operator assigns the value of the right operand to the left operand.*/

// const PI = 3.14;
// console.log(PI)

/* If several assignment operators appear in a sequence, the order from right to left applies. So the sequence: */

// let year = 2050;
// let newYear = year = 2051;
// console.log(year) -> 2051

// or

// let year = 2050;
// year = 2051;
// let newYear = year;
// console.log(year)  // -> 2051

// Arithmetic operators -> +, -, *, /, %, **

/* The basic binary arithmetic operators are the addition +, subtraction -, multiplication *, division /, 
division remainder % and power **. 
Their operation is analogous to what we know from mathematics, and the easiest way to trace them is to use an example: 
*/

// const x = 5;
// const y = 2;
 
// console.log("addition: ", x + y); // -> 7
// console.log("subtraction: ", x - y); // -> 3
// console.log("multiplication: ", x * y); // -> 10
// console.log("division: ", x / y); // -> 2.5
// console.log("division remainder :", x % y); // -> 1
// console.log("exponent: ", x ** y); // -> 25

// Unary arithmetic operators

/* There are also several unary arithmetic operators (operating on a single operand). 
Among them there are the plus + and minus - operators.

Both operators convert operands to the Number type, while the minus operator additionally negates it. */

// let str = "123";
// let n1 = +str;
// let n2 = -str;
// let n3 = -n2;
// let n4 = +"abcd";
 
// console.log(`${str} : ${typeof str}`); // -> 123 : string
// console.log(`${n1} : ${typeof n1}`); // -> 123 : number
// console.log(`${n2} : ${typeof n2}`); // -> -123 : number
// console.log(`${n3} : ${typeof n3}`); // -> 123 : number
// console.log(`${n4} : ${typeof n4}`); // -> NaN : number

// Unary increment and decrement operators

/* Among the arithmetic operators, we also have at our disposal the unary increment ++ and decrement -- operators, 
in both prefix and postfix versions. 

They allow us to increase (increment) or decrease (decrement) the value of the operand by 1.
These operators in the postfix version (i.e. the operator is on the right side of the operand) 
performs the operation by changing the value of the variable, but returns the value before the change. 
The prefix version of the operator (i.e. the operator is placed before the operand) 
performs the operation and returns the new value. */

// let n1 = 10;
// let n2 = 10;

// console.log(n1);    // -> 10
// console.log(n1++);  // -> 10
// console.log(n1);    // -> 11

// console.log(n2);    // -> 10
// console.log(++n2);  // -> 11
// console.log(n2);    // -> 11

// let n3 = 20;
// let n4 = 20;

// console.log(n3); // -> 20
// console.log(n3--); // -> 20
// console.log(n3); // -> 19

// console.log(n4); // -> 20
// console.log(--n4); // -> 19
// console.log(n4); // -> 19

/* This happens because the code line:

console.log(n1++);

is interpreted as:

console.log(n1);
n1 = n1 + 1;

while the line:

console.log(++n1);

means the same as:

n1 = n1 + 1;
console.log(n1); */

/* Keep in mind that the Number type is a floating-point type, 
which means that the results of some of the operations may be imprecise. */

// console.log(0.2 + 0.1);     // 0.30000000000000004
// console.log(0.2 * 0.1);     // 0.020000000000000004
// console.log(0.3 / 0.1);     // 2.9999999999999996

/* These are artefacts of floating-point arithmetic. 
The number will be precise for integers up to 252, but fractions may not be as precise, 
as many fractions are impossible to directly represent in binary format. */ 


// Compound Assignment Operators

/* Binary arithmetic operators can be combined with the assignment operator, 
resulting in the addition assignment +=, the subtraction assignment -=, the multiplication assignment *=, 
the division assignment /=, the remainder assignment %=, and the power assignment **=. */

/* x += 100;
could be written down in the form:


x = x + 100;
It should therefore not be difficult to understand how the following example works: */


// let x = 10;
// x += 2;
// console.log(x); // -> 12
// x -= 4;
// console.log(x); // -> 8
// x *= 3;
// console.log(x); // -> 24
// x /= 6;
// console.log(x); // -> 4
// x **= 3;
// console.log(x); // -> 64
// x %= 10;
// console.log(x); // -> 4

// Logical Operators

/* Logical operators work with Boolean type values (true or false). 
For now, we can assume that they work on operands of this type and return values of this type only. 
JavaScript provides us with three such operators:

a conjunction, i.e. logical AND (&& symbol)
an alternative, i.e. logical OR (symbol ||)
a negation, i.e. logical NOT (symbol !) */


// AND: 

// console.log(true && true); // -> true
// console.log(true && false); // -> false
// console.log(false && true); // -> false
// console.log(false && false); // -> false

// OR:

// console.log(true || true); // -> true
// console.log(true || false); // -> true
// console.log(false || true); // -> true
// console.log(false || false); // -> false

// NOT:

// console.log(!true); // -> false
// console.log(!false); // -> true


/* We can, of course, connect as many of these operators as we need, creating more complex "sentences".
The highest priority is negation !, then conjunction &&, and finally the alternative ||. 
The precedence can of course be changed by means of parentheses. */

// const a = false;
// const b = true;
// const c = false;
// const d = true;
 
// console.log(a && b && c || d); // -> true
// console.log(a && b && (c || d)); // -> false

// Logical operators and non-Boolean values

/* As long as operands are of the type Boolean, we can easily see what will be returned. 
But those operators can also be used with different data types. */

// NOT:
/* The easiest case is logical NOT. First, the operand is temporarily converted to a Boolean value 
and only then it is treated with the appropriate operator action 
(i.e. a true value is converted to false, and vice versa). 
Therefore, the NOT operator will always return either false or true. 
Often, double negation is used to convert any type to Boolean. */

// let nr = 0;
// let year = 1970;
// let name = "Alice";
// let empty = "";
 
// console.log(!nr); // -> true
// console.log(!year); // -> false
// console.log(!name); // -> false
// console.log(!empty); // -> true
 
// console.log(!!nr); // -> false
// console.log(!!name); // -> true

// AND and OR:
/* They don't return a Boolean value. In reality, they return its first or second operand. 
The AND operator will return the first operand if it evaluates to false, and the second operand otherwise. 
The OR operator will return its first operand if it evaluates to true, and the second operand otherwise. 
Evaluation is simply an attempt to convert an operand to a Boolean-type value */


// small int value is denoted as 'true', big int value is denoted as 'false'

// console.log(true && 1991); // -> 1991
// console.log(false && 1991); // -> false
// console.log(2 && 5); // -> 5
// console.log(0 && 5); // -> 0
// console.log("Alice" && "Bob"); // -> Bob
// console.log("" && "Bob"); // -> empty string
 
 
// console.log(true || 1991); // -> true
// console.log(false || 1991); // -> 1991
// console.log(2 || 5); // -> 2
// console.log(0 || 5); // -> 5
// console.log("Alice" || "Bob"); // -> Alice
// console.log("" || "Bob"); // -> Bob

// Compound Assignment Operators (Logical)

/* Just like arithmetic operators, binary logical operators can be used in combination with the assignment operator, 
creating a logical AND assignment &&= and a logical OR assignment ||=. */

// AND

let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

// The instruction a &&= false means exactly the same as a = a && false.

// OR

let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true

// the operation b ||= true is interpreted as b = b || true.



