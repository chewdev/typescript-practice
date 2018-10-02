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
