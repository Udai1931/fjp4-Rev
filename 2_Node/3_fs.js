const fs = require('fs');
const path = require('path');
//files
//read
//write
//update
//delete

// let op1 = fs.readFileSync("1.txt");
// console.log("Output : "+op1)

// let op2 = fs.readFileSync("2.txt");  //Error 
// console.log("Output : "+op1)

// let op3 = fs.writeFileSync("1.txt","New Text");
// console.log("File Written")


// let op4 = fs.writeFileSync("2.txt","New Text"); //New File
// console.log("File Written")

// let op5 = fs.appendFileSync("1.txt","This is the new appended text") //Append data in a file
// console.log("Appended File")

// let op6 = fs.unlinkSync("1.txt"); //Delete File
// console.log("file deleted.")ee



//Directories
//make
//delete

// fs.mkdirSync("directories"); //simply creates a directory with the provided name
// console.log("Directory Created")

// fs.rmdirSync("directories") // simply finds the dir of provided name and delete it
// console.log("Directory delete")

// let ans = fs.existsSync("direct"); //simply tells if that directory exist or not.
// console.log(ans)

// let ans = fs.lstatSync("temp.js"); //stats for the supplied filename/ dir name
// console.log(ans);
// console.log(ans.isDirectory());
// console.log(ans.isFile());

// let ans = fs.readdirSync("directories") //files info inside the directory
// console.log(ans);



////////////////////Copy Files/////////////////////////////////////////

let srcPath = "E:\\PepClass\\Fjp4-Rev\\2_Node\\dir1\\1.txt"

let destPath = "E:\\PepClass\\Fjp4-Rev\\2_Node\\dir2"

let fileName = path.basename(srcPath); //return the filename
console.log(fileName)

let updatedDest = path.join(destPath,fileName);
console.log(updatedDest)

fs.copyFileSync(srcPath,updatedDest);
console.log("File Copied")