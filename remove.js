#!/usr/bin/env node


import { execSync } from "child_process";
import { join } from "path";


const GlobalBinDirectory = execSync("npm bin -g").toString().trim();
const symlinkTarget = join(GlobalBinDirectory, "doc");
const commandUnlink = `unlink ${symlinkTarget}`;

try {
    execSync(commandUnlink);
} catch (error) {
}
