// Decorators
// decorators receive a single parameter which is a constructor function
// Experimental support for decorators is a feature that is subject to change in future releases.
// We must set the 'experimentalDecorators': true option in tsconfig.json to remove the warning.
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

// We create a decorator by adding the @ symbol
@logged // this will pass the below constructor function to the logged function above
class Person2 {
  constructor() {
    console.log("Hi!");
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : (f: Function) => null;
}

@logging(false)
class CarFactory {}

// Advanced decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

// we can pass multiple decorators
@logging(true)
@printable
class Plants {
  name = "Some Plant";
}

const somePlant = new Plants();
(<any>somePlant).print();

function makeNewPlant(shouldLog: boolean) {
  @logging(shouldLog)
  @printable
  class Plants {
    name = "Other Plant";
  }
  return new Plants();
}

// both objects will have print available
// only the object passed true will have the constructor function logged
const someOtherPlant = makeNewPlant(true);
const someOtherPlant2 = makeNewPlant(false);
(<any>someOtherPlant).print();
(<any>someOtherPlant2).print();

// Method Decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}
class NewProject {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }

  @editable(true)
  editableFunc() {
    console.log("we can edit this");
  }
}

const project = new NewProject("Awesome Project");
project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// }; // this does not work as we have configured the method to not be editable, it is read only
project.calcBudget();
project.editableFunc();
project.editableFunc = function() {
  console.log("see, we we can edit it");
};
project.editableFunc();

// Property Decorators
function overwritable(value: boolean): any {
  // This would actually prevent the property from ever being written
  // We would typically use a decorator on a property to provide a listener on the property, such as watching for changes
  return function(target: any, propName: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Chocolate {
  chocolateLevel: string = "Milk";
  hasNuts: boolean = false;
  isLiked: boolean = false;

  @overwritable(true) // passing false would prevent the property from ever being written
  isChocolate: boolean = true;

  like() {
    this.isLiked = true;
  }

  unlike() {
    this.isLiked = false;
  }
}

const peanutCluster = new Chocolate();
peanutCluster.hasNuts = true;
peanutCluster.like();
console.log(peanutCluster);
peanutCluster.isChocolate = false; // this does not work, isChocolate is not writable
console.log(peanutCluster);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  // target is either the constructor or prototype
  console.log("target: ", target);
  console.log("methodName: ", methodName);
  console.log("paramIndex: ", paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const newCourse = new Course("My Course");
newCourse.printStudentNumbers("anything", true);
newCourse.printStudentNumbers("anything", false);
