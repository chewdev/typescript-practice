// let and const
console.log("Let and Const");
let variable = "Test"; // type is inferred to be string
console.log(variable);
variable = "Something else";
console.log(variable);

const maxLevel = 99;
console.log(maxLevel);
// maxLevel = 100; // will not work because constants cannot be re-assigned even when the type is the same

// Block scope
function reset() {
  // console.log(variable); // undefined --- block scoped variable used before declaration
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("Arrow Functions");
const addNumbers = function(a: number, b: number): number {
  return a + b;
};
console.log(addNumbers(10, 3)); // 13

const multiplyNumbers = (a: number, b: number): number => a * b;
console.log(multiplyNumbers(2, 3)); // 6

const greet = () => {
  console.log("hello");
};

greet();

const greetFriend = (friend: string) => console.log(`hello ${friend}`);
greetFriend("bob");

// Default Parameters
console.log("Default Parameters");
const countDown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done! " + start);
};
countDown(100);
countDown();

// Rest and Spread
console.log("Rest and Spread");
const numbers = [1, 2, 3, 99, -5];
// spread operator
console.log(Math.max(...numbers));

// rest operator
function makeArray(...args: number[]): number[] {
  return args; // returns an array of the number arguments passed to it
}

console.log(makeArray(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]

function makeArrayPlusVal(val: number, ...rest: number[]): number[] {
  return rest.map(num => num + val);
}

console.log(makeArrayPlusVal(2, 1, 2, 3, 4, 5)); // [3, 4, 5, 6, 7]

// Destructuring
console.log("Destructuring");

const myHobbies = ["Cooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]); // Cooking, Sports

// Array Destructuring - pull values off an array and set them to new variables
const [firstHobby, secondHobby] = myHobbies;
console.log(firstHobby, secondHobby); // Cooking, Sports

// Object Destructuring - pull values off an Object
const someNewData = {
  username: "Bill222",
  age: 28
};

const {
  username: bill,
  age
} = someNewData; /* Pull off username, but set it to the variable bill. Pull off age and leave it as the variable age. bill is called an alias and is not required*/
console.log(bill, age); // Bill222 28

// Template Literals
console.log("Template Literals");
const someName = "Bob333";
// template literal
const greeting = `Hello ${someName}`; // We do not need to do separate concatenations with +'s
const notTemplateLiteral = "Bye " + someName;
console.log(greeting); // "Hello Bob3333"
console.log(notTemplateLiteral);

// We can also use generators, iterators and symbols in TS
// All this code is compiled down to ES5 or before by TS, meaning a separate babel compilation step may not be necessary.

// Exercise, convert to ES6
// var double = function(value) {
//   return value * 2;
// };

var double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//   if (name === undefined) { name = "Max"; }
//   console.log("Hello, " + name);
// };
var greets = function(name: string = "Max") {
  console.log("Hello, " + name);
};
greets();
greets("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers2: number[] = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers2));
console.log(Math.min(...numbers2));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers2);
newArray.push(...numbers2);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const { firstName, experience } = scientist;
console.log(firstName, experience);
