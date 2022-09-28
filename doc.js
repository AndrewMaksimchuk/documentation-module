#!/usr/bin/env node


const [ ,, modulePath ] = process.argv;

if (!modulePath) {
    console.log("Need path to module!");
    console.log("Example: doc ./modules/example.js")
    process.exit();
}

const module = await import(modulePath);
const documentation = module.__doc__;


const header = 
`
Documentation for the module:
    ${modulePath.split("/").at(-1)}`;


documentation ? showDocumentation(header, documentation)  : notExist();


function showDocumentation(header, documentation) {
    console.log(header);
    console.log(documentation);
}


function notExist() {
    console.log("\nDocumentation not exist!\n");
}

