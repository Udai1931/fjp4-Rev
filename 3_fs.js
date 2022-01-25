const fs = require('fs');

const file = fs.appendFileSync('4_cp.js',"Aaa");
// console.log(file.toString());

const stat = fs.lstatSync('1_cp.js');
console.log(stat.isFile())
console.log(stat.isDirectory())

const path = "E:\\PepClass\\dir"
let content = fs.readdirSync(path);
console.log("content : "+content);