// Interfaces
console.log("Interfaces");

// interfaces are not actually compiled into the JS file that is output
// interfaces exist to check for proper implementation during compilation
// interfaces are a way to specify types and properties expected to be available on an object
interface NamedPerson {
  name: string;
}

function newGreet(person: NamedPerson) {
  console.log("Hello, " + person.name);
}

function changeName(person: NamedPerson) {
  person.name = "Bill";
}

const person = {
  name: "Bob",
  age: 29
};

newGreet(person); // No error even though there is an age property on the object as it is not an object literal
changeName(person);
newGreet(person);
// newGreet({name: "John", age: 29}); /* This will show an error in compilation. When passing an object literal to a function specified with an interface, it expects that only the specified properties will exist on the object. However, this object literal specifies an age which is not specified in the interface. */

interface personProps {
  name: string;
  age?: number;
  [unknownProp: string]: any /* This specifies unkown properties that may be available on the object which we may not know the name of or type */;
  greet?(lastName: string): void; // we can also specify methods that should be on the object
} // we can specify optional properties on an interface using the ?

function sayHi(person: personProps) {
  console.log("Hi, " + person.name + (person.age ? person.age : ""));
}

sayHi({ name: "Jill", age: 22 }); // We can specify age as it is optional
sayHi({ name: "Jack" }); // We can also not specify age as it is optional
// sayHi({ name: 22, age: "Joe" }); // We cannot use numbers as name and strings as age
sayHi({ name: "Jen", age: 25, hobbies: ["sports", "coding"] }); // we can add hobbies because we have an unknown property specified on the interface

// We can also implement interfaces on a class much like abstract classes
// We can add additional properties/methods on our class beyond the interface as in abstract classes
class thatPerson implements personProps {
  name: string = "";
  greet(lastName: string) {
    console.log("Hi, I am " + this.name + " " + lastName);
  }

  constructor(name: string) {
    this.name = name;
  }
}

const someNewPerson = new thatPerson("John");
newGreet(someNewPerson);
someNewPerson.greet("Doe");

// Function Type interfaces

interface DoubleValueFunc {
  (number1: number, number2: number): number; // Must be a function with this shape
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(a: number, b: number): number {
  return (a + b) * 2;
};

console.log(myDoubleFunction(10, 5)); //30

// Interface Inheritance
// interfaces can extended other interfaces much like class inheritance
interface AgedPerson extends personProps {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 29,
  name: "Jackie",
  greet(lastName: string) {
    console.log("Hello!");
  }
};

console.log(oldPerson);
