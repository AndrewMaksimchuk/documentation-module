#!/usr/bin/env node


import { execSync } from "child_process";
import { join } from "path";


const GlobalBinDirectory = execSync("npm bin -g").toString().trim();
const listDirectory = `ls ${GlobalBinDirectory}`;

try {
    const response = execSync(listDirectory).toString().trim().includes("doc");
    response ? console.log("Doc package installed!") : console.log("Package not install!");
} catch (error) {
}
