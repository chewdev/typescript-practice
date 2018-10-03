// Creating namespaces
// This allows us to use encapsulation to prevent polution of the global scope
// We must choose what to export and these properties/methods will be available on the namespace
// namespace MyMath {
//   const PI = 3.14;

//   export function calcCircumference(diameter: number): number {
//     return diameter * PI;
//   }

//   export function calcRectangleArea(width: number, length: number) {
//     return width * length;
//   }
// }

// Importing modules in TS, we use three / and the reference tag as below
// When compiling, we must do the following in the terminal:
// tsc namespace.ts --outFile namespace.js
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
import circleMath = MyMath.Circle;

const PI = 2.99; // no error because PI above is encapsulated
console.log(PI); // 2.99

console.log(MyMath.calcRectangleArea(3, 6));
console.log(MyMath.Circle.calcCircumference(4));
console.log(circleMath.calcCircumference(3));

// ANOTHER WAY TO BUNDLE/IMPORT MODULES INTO A SINGLE FILE
// in terminal: tsc --outFile (file to bundle everything into, e.g. namespace.js) (files to bundle into it separated by spaces)
// e.g.: tsc --outFile namespace.js circleMath.ts rectangleMath.ts namespace.ts
