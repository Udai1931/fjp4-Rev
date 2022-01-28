const cp = require('child_process')

//It helps in making some subprocesses

// cp.execSync('calc')  //open calculator

// cp.execSync('code') //opens vscode

// cp.execSync('start chrome') //opens chrome

let op = cp.execSync('node temp.js') //start a seprate script
console.log("Output : "+op)