import "jQuery"; // We need a TypeScript definition file for jquery to create a proper interface between TS and jquery
/* If we are using individual definition files, we must find or create the definition file and include it at the root of the project. The definition file for jquery is in jquery.d.ts file */
$("#app").css({ "background-color": "green" });
