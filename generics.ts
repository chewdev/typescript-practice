// Generics
console.log("Generics");
// Simple Generic
function echo(data: any) {
  return data;
}
console.log(echo("Bob"));
console.log(echo(29).length); // undefined --- no error because return type is any and could have a .length property
console.log(echo({ name: "Bob", age: 29 }));

// Better Generic
function betterEcho<T>(data: T) {
  // <T> means this is a generic function and the data type is type T
  return data;
}

console.log(betterEcho("Bob").length);
//console.log(betterEcho(29).length); // this time it gives an error because numbers do not have a length property and the Generic tells us what the return type is (number in this case)
console.log(betterEcho({ name: "Bob", age: 29 }));
console.log(betterEcho<number>(25));
//console.log(betterEcho<number>("String")); // error because we specified number but passed string

// Built-in Generics
// Arrays
const someResults = [1.95, 2.44, "chicken"];
// const otherResults: Array<number> = [1.99, 2.22, 'chicken']; // error because we specified array of numbers
const otherResults: Array<number> = [1.99, 2.22];
// otherResults.push("chicken"); // can't push a string into an array of numbers

function printAll<T>(args: T[]) {
  args.forEach(el => console.log(el));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T; // T can be a number or string
  multiplyValue: U; // U can also be a number or string and does not have to be the same as T
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
  constructor(base: T, multiply: U) {
    this.baseValue = base;
    this.multiplyValue = multiply;
  }
}

const simpleMath = new SimpleMath<number, number>(10, 20);
console.log(simpleMath.calculate());
const simpleStringMath = new SimpleMath<string, string>("5", "7");
console.log(simpleStringMath.calculate());
const notSoSimpleMath = new SimpleMath<number, string>(6, "5");
console.log(notSoSimpleMath.calculate());

class MyMap<T> {
  private map: { [key: string]: T } = {};
  setItem(key: string, item: T) {
    this.map[key] = item;
  } // should create a new key-value pair

  getItem(key: string) {
    return this.map[key];
  } // should retrieve the value of the provided key
  clear() {
    this.map = {};
  } // should remove all key-value pairs
  printMap() {
    // Object.keys(this.map).forEach(key => console.log(key, this.map[key]));
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  } // should output key-value pairs
}
const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();
console.log(numberMap.getItem("apples"));

const stringMap = new MyMap<string>();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();
stringMap.clear();
stringMap.setItem("friend", "Bill");
stringMap.printMap();
