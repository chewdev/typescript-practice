// string
let myName = "Chris"; // can also explicitly assign type- let myName: string = "Chris";
myName = "Bob";

// number (includes int and float)
let myAge = 28; // let myAge: number = 28;
myAge = 29;

// boolean
let hasHobbies = true; // let hasHobbies: boolean = true;
hasHobbies = false;

// assign types
// If we don't assign a value to the variable and don't specify type, TS will give it type of 'any'
// In this case we must assign type when declaring the variable in order to require a specific type
let myRealAge: number;
myRealAge = 28;
myRealAge = 27;

// array
let hobbiesArr = ["cooking", "sports"]; // this initializes an array of strings and we cannot assign numbers to its elements
let hobbies: any[] = ["cooking", "sports"]; // this initializes an array of any types and we can assign numbers, strings, etc. to the elements
hobbies[0] = 28; // we cannot set hobbies = 28; as hobbies must be an array

// tuples
let address: [string, number] = [
  "MyStreet",
  99
]; /* tuple shows the exact shape that an array must have. This array must have 2 elements, the first a string and the second a number. */
// address = ["yourstreet", 99, 'bob']; This cannot be done as length must be 2
// address = [99, "yourstreet"]; This cannot be done as the first element must be a string and second element must be a number
address = ["yourstreet", 99]; // This works as the shape of the array matches the tuple

// enum
enum Color {
  Gray, // 0
  Green = 100,
  Orange, // 101
  Blue = 2,
  Purple // 3
}

let myColor: Color = Color.Gray;
console.log(myColor); // 0
let yourColor: Color = Color.Blue;
console.log(yourColor); // 2

// any
let car: any = "Porsche";
console.log(car);
car = { make: "Porsche", model: "Boxster", year: 2017 }; // This would not work if we didn't use any as type as it was originally a string
// We should try to make our types immutable whenever possible and any should only be an exception. Do not use unless absolutely necessary.
console.log(car);

// functions
function returnName(): string {
  // This 'string' type declaration is the expected return type
  // return myAge; This would not work as return must be a string but myAge is a number
  return myName;
}
console.log(returnName());

// void
function sayHello(): void {
  // This 'void' type declaration means that nothing is returned from the function
  console.log("Hello!");
  // return myName; This would not work as this function should not return anything
}

// argument types
function multiply(a: number, b: number): number {
  return a * b;
}
// console.log(multiply(2, 'Bob')); // 'NaN' is returned if we do not specificy argument types. Does not compile when argument types are assigned
console.log(multiply(2, 4)); // 8

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // This won't work as sayHello does not take 2 numbers as args and doesn't return a number
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(1, 2));

// objects
let userData = {
  name: "Bob",
  age: 30
}; // Now userData must be an object with a name property that is a string and an age property that is a number. We cannot add or remove properties

userData = {
  name: "Chris",
  age: 28
};

let someData: { name: string; age: number } = {
  // explicitly assign type of object, properties on object and types of the properties on the object
  name: "John",
  age: 33
};

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// type alias
type ComplexObj = { data: number[]; output: (all: boolean) => number[] };

// asign this newly created type to this object. We could swap out this type into the object named 'complex' above and have multiple objects with this type
let complex2: ComplexObj = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = false; this would not work as it can only be number or string, not a boolean or other type

// check types
let finalValue = 28;
if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

// never
function neverReturns(): never {
  // never actually returns
  throw new Error("An error!");
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null; // unless we use a union with number and null, we cannot assign null to a number type
let canThisBeAny = null;
canThisBeAny = 12;

type bankType = { money: number; deposit: (val: number) => void };
let bankAccount: bankType = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: bankType; hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
