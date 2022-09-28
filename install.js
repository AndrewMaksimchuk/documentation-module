#!/usr/bin/env node


import { execSync } from "child_process";
import { join } from "path";


const CWD = process.cwd();
const binCurrentFilePath = join(CWD, "doc.js");
const GlobalBinDirectory = execSync("npm bin -g").toString().trim();
const symlinkTarget = join(GlobalBinDirectory, "doc");
const commandCreateSymlink = `ln -s ${binCurrentFilePath} ${symlinkTarget}`;

try {
    execSync(commandCreateSymlink);
} catch (error) {
}
