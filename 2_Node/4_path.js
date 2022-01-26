const path = require('path')

//all defination => wrong => module



let srcPath = "E:\\PepClass\\Fjp4-Rev\\2_Node\\dir1\\1.txt"
let destPath = "E:\\PepClass\\Fjp4-Rev\\2_Node\\dir2\\"

let fileName = path.basename(srcPath); //return the filename

console.log(path.join(destPath,fileName)); // join 2 directories path

let ext = path.extname(srcPath);
console.log(ext)

console.log(__dirname);
console.log(__filename);