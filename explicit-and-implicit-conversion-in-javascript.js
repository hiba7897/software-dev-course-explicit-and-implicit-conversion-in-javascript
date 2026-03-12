/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Part 1 Debugging Challenge

let result = "5" - 2; // Implicit type conversion
console.log("The result is: " + result);

let isValid = Boolean("false"); 
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); // Used the Number() explicit type conversion methods to convert "25" into 25
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

// Part 2 Write Your Own Examples

// Example of Implicit type conversion
let result2 = "5" + 3; 
console.log(result2);

// Example of Explicit type conversion
let value = undefined;  
console.log(value); // Before Explicit type conversion
let num = Number(value); // After Explicit type conversion
console.log(num);