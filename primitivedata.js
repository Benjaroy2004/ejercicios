/*
All possible return values of the typeof operator are:

Output
"undefined"
"object"
"boolean"
"number"
"bigint"
"string"
"symbol"
"function"

*/
let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number
   
let name = "Alice";
console.log(typeof name); // -> string
console.log(typeof "Bob"); // -> string
   
let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string


//BOOLEAN

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;
   
console.log(false); // -> false
console.log(typeof false); // -> boolean
console.log(isDataValid); // -> true
console.log(typeof isDataValid); // -> boolean


/*NUMBER
 va desde -(2^53 - 1) hasta 2^53 - 1
*/

let temperature = -10;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;
   
console.log(year); // -> 1991;
console.log(typeof year); // -> number;

//Números en diferentes bases
let a = 10; // decimal - default
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary

console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2

//numeros con notación exponencial
let x = 9e3;
let y = 123e-5;
console.log(x); // -> 9000
console.log(y); // -> 0.00123

//numeros especiales
a = 1 / 0;
b = -Infinity;
   
console.log(a); // -> Infinity
console.log(b); // -> -Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number
   
let s = "it's definitely not a number";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number


/*
****************BIGINT******************
números enteros muy grandes que superan el límite de los números normales
*/
let bigInt1 = 9007199254741991n;
let bigInt2 = BigInt("9007199254741991");
console.log(bigInt1); // -> 9007199254741991n
console.log(bigInt2); // -> 9007199254741991n
console.log(typeof bigInt1); // -> bigint
console.log(typeof bigInt2); // -> bigint   
//You cannot use other types in arithmetic operations on BigInts
// , that is, you cannot add a BigInt and a Number to each other
//  (this will generate an error).


/***************STRING**********
cadena de texto
Strings, like other primitives, are immutable, so when we want 
to change even one letter in a string, in reality, we create a new string.
*/
let singleQuoteString = 'Hello, World!';
//puedes poner comillas simples dentro de comillas dobles y viceversa


//A quote mark preceded by the \ (backslash) character will be interpreted
//  as ordinary characters that are part of our string
let message1 = 'The vessel \'Mars\' called at the port.';

//Trying to perform arithmetic operations on String type values, such as subtraction,
//  multiplication, or division, will usually end in an error. More precisely,
//  the NaN value will be returned as a result of the action.

let path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

//the JavaScript interpreter tries to interpret the given values as numbers,
//  or convert them into numbers. So if the character strings consists of digits,
//  the automatic conversion will be successful and we will get the result of the
//  arithmetic action as a Number type value

let test = "100" - "10";
console.log(test); // -> 90
console.log(typeof test); // -> number



//The exception is the addition operation, which will not be treated 
// as an arithmetic one, but as an attempt to create a new string by
//  combining two input strings.

let path1 = "C:\\" + "Windows";
console.log(path1); // -> C:\Windows
   
let test1 = "100" + "10";
console.log(test1); // -> 10010
console.log(typeof test1); // -> string

//A mechanism that was introduced to JavaScript is string interpolation.
//  It allows you to treat a character string as a template
//  in which you can place values in selected places
//  such as those taken from variables.

let country = "Malawi";
let continent = "Africa";

//se agrega el signo $ y se encierra la variable entre {}
let sentence = ` ${country} is located in ${continent}.`;

console.log(sentence); // -> Malawi is located in Africa.



/*******autoboxing************
If a dot appears after a literal representing a primitive type,
 or after a variable containing this type of data, the JavaScript
interpreter tries to treat this value as an object and not a primitive.
it converts the primitive to the corresponding object on the fly, which
has the appropriate methods
 
 */
let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k


