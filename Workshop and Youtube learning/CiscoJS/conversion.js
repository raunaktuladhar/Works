/* Conversions in JavaScript happen automatically in specific situations, 
but can also be used explicitly through functions like String() or Number().*/

// const num = 42

// const strFromNum1 = String(num)     
// const strFromNum2 = String(8)
// const strFromBool = String(true)
// const numFromStr = Number("312")
// const boolFromNumber = Boolean(0)
// const random = Boolean(1)

// console.log(strFromNum1)              // -> 42
// console.log(strFromNum2)             //  -> 8
// console.log(strFromBool)            //   -> true
// console.log(numFromStr)            //    -> 312
// console.log(boolFromNumber)       //     -> false
// console.log(random)              //      -> true


// Conversion to String (topic)

// let nr = 42;
// let strNr = String(nr);
// console.log(`${typeof nr} : ${nr}`)              // number : 42
// console.log(`${typeof strNr} : ${strNr}`)       //  string : 42

// let bl = true;
// let strBl = String(bl);
// console.log(`${typeof bl} : ${bl}`); // -> boolean : true
// console.log(`${typeof strBl} : ${strBl}`); // -> string : true
   
// let bnr = 123n;
// let strBnr = String(bnr);
// console.log(`${typeof bnr} : ${bnr}`); // -> bigint : 123
// console.log(`${typeof strBnr} : ${strBnr}`); // -> string : 123
   
// let un = undefined;
// let strUn = String(un);
// console.log(`${typeof un} : ${un}`); // -> undefined : undefined
// console.log(`${typeof strUn} : ${strUn}`); // -> string : undefined
   
// let n = null;
// let strN = String(n);
// console.log(`${typeof n} : ${n}`); // -> object : null
// console.log(`${typeof strN} : ${strN}`); // -> string : null

// Note: string interpolation -> ${}

// Conversion to Number (topic)

/* Conversion to a number is not as obvious as conversion to a string. 
It works as expected for strings that represent actual numbers, 
like "14", "-72.134", or strings that represent numbers in scientific notation, like "2e3", 
or special number values like "NaN" or "Infinity". */

// console.log(Number(42));  //  ->  42
   
// console.log(Number("11"));  //  ->  11
// console.log(Number("0x11"));  //  ->  17
// console.log(Number("0o11"));  //  ->  9
// console.log(Number("0b11"));  //  ->  3
// console.log(Number("12e3"));  //    ->  12000
// console.log(Number("Infinity"));//  ->  Infinity
// console.log(Number("text"));  //  ->  NaN
   
// console.log(Number(14n));  //  ->  14
// console.log(Number(123456789123456789123n));  //  -  >    123456789123
// 456800000
   
// console.log(Number(true));  //  ->  1
// console.log(Number(false));  //  ->  0
   
// console.log(Number(undefined));  //    ->  NaN
   
// console.log(Number(null));//  ->  0
// console.log(typeof(0x11))       // -> number


// Conversion to Boolean (topic)

/* Conversions to Boolean follow simple rules, as we can only have one of two values: true or false. 
The value false is always returned for:

0,
NaN,
empty string,
undefined,
null

Any other value will result in true being returned. */

// console.log(Boolean(true));  //  ->  true
   
// console.log(Boolean(42));  //  ->  true
// console.log(Boolean(0));  //  ->  false
// console.log(Boolean(NaN));  //  ->  false
   
// console.log(Boolean("text"));  //  ->  true
// console.log(Boolean(""));  //  ->  false
   
// console.log(Boolean(undefined));  //  ->  false
   
// console.log(Boolean(null));  //  ->  false


// Conversion to BigInt   (topic)

/* we require a Number or String representing a number as a value to be converted. 
Values for conversion can be given in the default decimal form, as well as in hexadecimal, octal, or binary form. 
This applies both to the situation where we give the Number and String literals as arguments
We can also use exponential notation, but only for Number arguments. 
Unlike other conversions, conversion to a BigInt will throw an error, 
and will stop the program when unable to convert a given value.  

Note: When testing the following example, 
please pay attention to the fact that the first error prevents further code execution. 
So run the example several times in succession, removing the wrong calls one by one. */

// console.log(BigInt(11));  //  ->  11n
// console.log(BigInt(0x11));  //  ->  17n
// console.log(BigInt(11e2));  //  ->  1100n
   
// console.log(BigInt(true));  //  ->  1n
   
// console.log(BigInt("11"));  //  ->  11n
// console.log(BigInt("0x11"));  //  ->  17n
   
// console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt
   
// console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
   
// console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer


// Implicit Conversions (topic)

/* Conversions can also happen automatically, and they happen all the time. 
This simple example will demonstrate it (we tested a similar example when discussing the String type): */

const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number

/*Subtraction with a string, however, doesn't make much sense, 
so in that case JavaScript converts everything to Numbers. */


