// By default, TypeScript will still compile your code down to JavaScript even if there are errors/warnings
// It will show these warnings and prompt you to fix them, but it will still compile to JavaScript with the errors

let userName: string = "billybob";
// userName = 28; // This is still compiled by TypeScript by default even though we shouldn't assign a number to a string variable
// console.log(userName); // 28 is output to the console when userName = 28; is uncommented
/* If we do not want it to compile on error, go into tsconfig.json and add the key:value pair of "noEmitOnError": true --- this will stop TypeScript from creating the JS file when there is a TS error.*/

/* We can also enable "sourceMap": true in the config file to enable source maps. This will allow us to view our typescript code in the browser and set breakpoints for easier debugging in development*/

/* Another useful property we can set in the config file is "noImplicitAny": true --- This means that to create a variable of type any, we must explicitly state that it is of type any. It will not allow the type of any to be inferred.*/

/* If we want to check for when a parameter is declared but never used, we can set "noUnusedParameters": true in the config and this will show an error when a parameter is not used. Below the parameter somethingElse would cause an error as it is not used. */
function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  result = 33;
  if (isTrue) {
    result = 12;
  }

  return result;
}
