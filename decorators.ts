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
  return value ? logged : null;
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
