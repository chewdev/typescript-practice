// TypeScript Classes
// TS classes are different than normal ES6 classes, but similar in functionality
// We do not need to use the this keyword within a constructor to set values in the class
// Shares some similarities with other OOP languages like Java
// Everything is public in normal JavaScript/ES6
// TS allows us to declare values as public, protected or private
// private values can only be changed by/within its own instance of the class
// protected values are similar, however they can also be changed by other classes which inherit from this class

class Person {
  name: string;
  private type: string = "";
  protected age: number = 0;

  // We can also provide a constructor for initial setup of instance of class
  /* The parameter 'public username: string' will automatically take the argument passed to that parameter, create a public variable within the class and assign it's value to it. We do not have to set 'public username: string' above and we do not have to set 'this.username = username' below. */
  constructor(name: string, public username: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  celebrateBday() {
    this.age++;
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const newPerson = new Person("Bob", "bob12345", 22);
console.log(newPerson);
console.log(newPerson.getAge());
newPerson.celebrateBday();
console.log(newPerson.getAge());
newPerson.setType("Student");

class Student extends Person {
  constructor(
    public areaOfStudy: string,
    protected unitsAmount: number,
    name: string,
    username: string,
    age: number
  ) {
    super(name, username, age); // must call super whenever we have a constructor in a class that extends another class
    this.setType("Student");
    //console.log(this.type); // This doesn't work because type is private and only accessible within the Person class
  }
}

const billy = new Student("Computer Science", 12, "Billy", "billyisgr8", 22);
console.log(billy);
billy.celebrateBday();
console.log(billy);

// Getters & Setters
console.log("Getters and Setters");
class Plant {
  private _species: string = "Default";

  set species(value: string) {
    if (value.length > 2) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }

  get species() {
    return this._species;
  }
}

let newPlant = new Plant();
console.log(newPlant.species); // Default
newPlant.species = "NO";
console.log(newPlant.species); // Default -- not set because length not > 2
newPlant.species = "Cherry Blossom";
console.log(newPlant.species); // Cherry Blossom

// Static Properties and Methods
// These properties can be used without instantiating the class and can be used as helper methods/values
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
console.log("Abstract Classes");
// Classes that cannot be instantiated but must only be extended
abstract class Project {
  projectName: string = "Default";
  budget: number = 1;

  abstract changeName(
    name: string
  ): void; /* abstract method, shows what this function should look like but does not implement the logic. In this case, this changeName method should not return anything (: void) */

  calcBudget() {
    return this.budget * 2; // expect budget to be double what is expected
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("TypeScript is Awesome");
console.log(newProject);

// private constructors
console.log("Private Constructors");

// Singleton pattern -- only one instance needed of class
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {} // make name read only, cannot be set
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('The Only One'); // Cannot create instance from outside of class since constructor is private
let right = OnlyOne.getInstance(); // This will instanciate the class and then it will no longer be able to create a new instance, it will simply return the existing instance of the class

console.log(right.name); // The Only One
// right.name = "Something else"; Once readonly is added to the constructor, this does not work. Cannot be set
// console.log(right.name); // Something else --- If readonly was removed, this would be the output

// Section 5 Exercise
// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
class Car {
  name: string;
  acceleration: number = 0;

  honk(): void {
    console.log("Tooooooooooot!");
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }

  constructor(name: string) {
    this.name = name;
  }
}
var car2 = new Car("BMW");
car2.honk();
console.log(car2.acceleration);
car2.accelerate(10);
console.log(car2.acceleration);

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
class baseObject {
  width: number = 0;
  length: number = 0;
} // could also be an abstract class

class Rectangle extends baseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;

console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function() {
//     return this._firstName;
//   },
//   set: function(value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = "";
//     }
//   },
//   enumerable: true,
//   configurable: true
// });
class otherPerson {
  private _firstName: string = "";

  set firstName(name: string) {
    if (name.length > 3) {
      this._firstName = name;
    } else {
      this._firstName = "";
    }
  }

  get firstName(): string {
    return this._firstName;
  }
}
var newperson = new otherPerson();
console.log(newperson.firstName);
newperson.firstName = "Ma";
console.log(newperson.firstName);
newperson.firstName = "Chris";
console.log(newperson.firstName);
