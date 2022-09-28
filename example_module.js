import { openSync, writeFileSync } from "fs";


export function log(tty, value) {
	return writeFileSync(openSync(tty, "w+"), JSON.stringify(value) + "\n");
}


export const __doc__ =
`
Parameters:
    1. tty - The file name of the terminal connected to standart input (linux tty command).
    2. value - Any data type that can be converted to a string type.

Return:
    Function call "writeFileSync" from "fs" module.
`;


log.__doc__ = __doc__;


