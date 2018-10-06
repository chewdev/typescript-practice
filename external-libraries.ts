import "jQuery"; // We need a TypeScript definition file for jquery to create a proper interface between TS and jquery
/* If we are using individual definition files, we must find or create the definition file and include it at the root of the project. The definition file for jquery is in jquery.d.ts file */
/* A more robust means to add definition files is through the typings package added to the project. Necessary package definitions, such as jquery, can be added to the typings config file and installed.*/

// Example terminal commands for adding package support from typings:
// typings install dt~jquery --global --save
// The above command installs jquery definition file from the DefinitelyTyped repository, saves it globally and adds it to the typings config file

/* TypeScript 2.0+ provides typings manager and we do not have to add typings config / typings folder package. To use this built in typings manager we run a command in the terminal such as the following:
npm install --save-dev @types/jquery
This will add jquery to the types folder in node_modules. This way we only need to use npm install when sharing the project and do not have to also use typings install to install definition files. */
$("#app").css({ "background-color": "blue" });
