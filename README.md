## Example of documentation the module and get quick that information.


### Module:
```
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
```

`__doc__ ` - Is like protected property that store text description of module. All what developer whant to write.  

`log.__doc__ = __doc__;` - It`s option, for your needs, available in runtime.  


For quick see the documentation, just write command `doc path_to_module` and the text will be displayed.  


### Example:  
Write in terminal `doc ./example_module.js`  
Then see:
```
Documentation for the module:
    example_module.js

Parameters:
    1. tty - The file name of the terminal connected to standart input (linux tty command).
    2. value - Any data type that can be converted to a string type.

Return:
    Function call "writeFileSync" from "fs" module.
```


### Examples of launches:  
`doc ./module.js`
`./doc.js ./example_module.js`  
`npm run doc ./example_module.js`  
`node ./doc.js ./example_module.js`  


### Install:  
`npm run install`  

Installing - it`s just create symlink "doc" to package file doc.js.  


### NPM scripts:  
`doc` - See the documentation of module.  
`install` - Install package.  
`remove` - Remove package.  
`check` - Check if package installed.  
