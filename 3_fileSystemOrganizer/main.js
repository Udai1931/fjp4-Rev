// #!/usr/bin/env node
//File organizer
// 1. Help = lists all commands
// 2.Organize = organizes files by type
//3. tree = tree structure for the directory
const fs = require('fs')
const path = require('path')
const helpModule = require('./commands/help')
const treeModule = require('./commands/tree')
const organizeModule = require('./commands/organize')
let command = process.argv[2] //input from cli
// console.log(command)

let srcPath = process.argv[3]
// console.log(srcPath) 

switch(command){
    case "help" : helpModule.helpFunction()
    break
    case "organize" : organizeModule.organizeFunction(srcPath)
    break
    case "tree" : treeModule.treeFunction(srcPath)
    break
    default : console.log("Please provide a valid command.")
}

