// data types and type conversions \\

/* In JS, data types are divided into primitive (or simple) and complex (or composite). 
Among the primitive types, we can find numbers and strings of characters, while the complex types include, 
for example, arrays and objects. */

// literals (topic)

/* Literals are a way of noting specific values (data) in the program code. 
Literals are found in virtually all programming languages, including JS. 
We used literals in the previous chapter when initializing variables. */

// let  year  =  1990;
// console.log(year);  //  ->  1990
// console.log(1991);  //  ->  1991
// console.log("Alice");  //  ->  Alice


// typeof operator (topic)

// informs us of the type of data indicated as a given argument.

/* 
All possible return values of the typeof operator are:

"undefined"
"object"
"boolean"
"number"
"bigint"
"string"
"symbol"
"function"      */

// let year = 1990;
// console.log(typeof year);  // number
// console.log(typeof 1991);  // number

// let name = "Alice";
// console.log(typeof name);      // string
// console.log(typeof "Bob");     // string

// let typeofYear = typeof year;
// console.log(typeofYear);          //number
// console.log(typeof typeofYear);  //string


// Primitive data types (topic)

/* In JS, there are six primitive (or simple) data types: Boolean, Number, BigInt, String, Symbol, and undefined. 
Additionally, the primitive null value is also treated as a separate type. 
The primitive, as we have already said, is a type of data whose values are atomic. 
This means that the value is one, indivisible element. */

// Boolean -> The Boolean is a logical data type. It can only take one of two values: true or false.
/* Booleans are also used as what is commonly referred to as a flag, 
a variable that signals something that can be either present or absent, enabled or disabled, etc. 
Like any other variable, booleans should have clear and informative names. It’s not mandatory, 
but we can often see that boolean flag names are prefixed with "is", 
to show the intent of checking this for true/ false values. */

// let isDatavalid = true;
// let isStringtoolong = false;
// let isGameover = false;
// contnueloop = true;

// console.log(false);                 // false 
// console.log(typeof false);          // boolean
// console.log(isDatavalid);           // true
// console.log(typeof isDatavalid);    // boolean

// Number -> This is the main numeric type in JS that represents both real numbers (e.g. fractions) and integers. 
/* the integer values should be limited in JavaScript to the range from -(253 – 1) to (253 – 1).
Numbers allow for all typical arithmetic operations, like addition, subtraction, multiplication, and division.
 */

// const year = 1991;
// let delayInSeconds = 0.00016;
// let area = (16 * 3.14);
// let halfArea = area / 2;

// console.log(year);          // 1991
// console.log(typeof year);   // number

// Numbers in JS are usually presented in decimal form  

// let a = 10;       // decimal - default
// let b = 0x10;     // hexadecimal
// let c = 0o10;     // octal
// let d = 0b10;     // binary

// console.log(a);   // 10
// console.log(b);   // 16
// console.log(c);   // 8
// console.log(d);   // 2

// let x = 9e3;     
// let y = 123e-5;
// console.log(x);   // 9000
// console.log(y);   // 0.00123


// In addition to regular numbers in JavaScript, we use three additional special values, 
// which are: Infinity, -Infinity and NaN (not a number). 
// The first two do not require any additional explanations – 
// they are exactly what we know from mathematics. 
// The last one, NaN, is not so much a numerical value as a notification that some arithmetic action 
// could not be performed because the argument is either not a number, or cannot be converted to a number.

// let a = 1 / 0;
// let b = -Infinity;

// console.log(a);          // Infinity
// console.log(b);          // -Infinity
// console.log(typeof a);   // number
// console.log(typeof b);   // number

// let s = "it's definitely not a number";
// let n = s * 10;
// console.log(n);         // Nan
// console.log(typeof n);  // number

// BigInt
/* The BigInt type is not used too often. It allows us to write integers of virtually any length. 
For almost any normal numerical operations, the Number type is enough, 
but from time to time we need a type that can handle much bigger integers.
We can use mathematical operations on BigInts in the same way as on Numbers, 
but there is a difference when dividing. 
As the BigInt is an integer type, the division result will always be rounded down to the nearest whole number. 
BigInt literals are numbers with the ...n suffix. */

// let big = 1234567890000000000000n;
// let big2 = 1n;

// console.log(big);           // 1234567890000000000000n
// console.log(typeof big);    // bigint

// console.log(big2);          // 1n
// console.log(7n / 4n);       // 1n

// String
/* The String type represents a sequence of characters forming a piece of text. 
Common operations on texts include concatenation, extraction of the substring, and checking the length of the string. 
Strings are extensively used in programming and even more so in web development, 
as both HTML and a big part of Internet content is text. */

// let  country  =  "Malawi";
// let  continent  =  'Africa';
   
// console.log(country);  //  ->  Malawi
// console.log(typeof  country);  //  ->  string
// console.log(continent);  //  ->  Africa
// console.log(typeof  continent);  //  ->  string

/* If you want to put a single or double quote inside the string, 
you can also use the escape character – backslash. 
A quote mark preceded by the \ character will be interpreted as ordinary characters that are part of our string, 
not parts of a literal construction. The backslash itself, i
f it is to be treated as an ordinary character, 
must also be preceded by ... an escape character (i.e. a backslash). */ 

// let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
// let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
// console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
// console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
// let  path  =  "C:\\Windows";
// console.log(path);  //  ->  C:\Windows

/*string interpolation allows you to treat a character string as a template, 
in which you can place values in selected places, such as those taken from variables. 
Such a literal is created using backticks instead of quotation marks. 
The places where values are inserted are marked with curly brackets preceded by a $ sign.*/

// let  country  =  "Malawi";
// let  continent  =  "Africa";
   
// let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
// console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

/* The console object has many other methods besides the log method, 
such as time and timeEnd (which can be used to measure time). */

// console.time();
// console.log("test  console");  //  ->  test  console
// console.timeEnd();  //  ->  default:  0.108154296875  ms


/* 
length: property, returns the number of characters in a string;

charAt(index): method, returns the character at the "index" position in the string (indexes start from 0);

slice(beginIndex, [optional] endIndex): method, returns a new string that is created from the characters between beginIndex (included) and endIndex (excluded); 
if endIndex is omitted, then the new string is from beginIndex to the end of the string;

split(separator, [optional] limit): method, splits the string into substrings whenever a separator is found in that string, 
and returns an array of those substrings (we will say a few words about arrays in a moment), 
while an optional limit limits the number of substrings added to the list.*/

// let  str  =  "java  script  language";
   
// console.log(str.length);  //  ->  20
// console.log('test'.length);  //  ->  4
   
// console.log(str.charAt(0));  //  ->  'j'
// console.log('abc'.charAt(1));  //  ->  'b'
   
// console.log(str.slice(0,  4));  //  ->  'java'
// console.log('test'.slice(1,  3));  //  ->  'es'
   
// console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
// console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

// null
/* The null value is quite specific. The value itself is primitive, 
while the type to which it belongs is not a primitive type, such as Number or undefined. 
This is a separate category, associated with complex types, such as objects. 
The null value is used to indicate that the variable does not contain anything, 
and most often it is a variable that is intended to contain values of complex types. */
// One important caveat for null is that when checked with the typeof operator, it will return "object"

// let  someResource;
// console.log(someResource);  //  ->  undefined
// console.log(typeof  someResource);  //  ->  undefined
   
// someResource  =  null;
// console.log(someResource);  //  ->  null
// console.log(typeof  someResource);  //  ->  object

// Primitive construction functions (topic)

/* the function String will by default create and return an empty string – primitive "";
the function Number will by default create and return the value 0;
the function Boolean will by default create and return the value of false. 

The function BigInt, unlike other constructor functions, requires you to pass some initial value to it. 
This can be an integer number that will be converted to a BigInt  */

const str = String()
const num = Number()
const bool = Boolean()

console.log(str)  // -> nothing
console.log(num)  // -> 0
console.log(bool) // -> false

const big1 = BigInt(42)
console.log(big1)          // -> 42n

const big2 = BigInt()  // TypeError: Cannot convert undefined to a BigInt

